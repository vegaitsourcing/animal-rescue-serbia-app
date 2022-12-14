import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useGetCategories } from '../../hooks/api/Categories/useGetCategories';
import { usePostCategory } from '../../hooks/api/Categories/usePostCategory';
import Plus from '../../shared/Icons/Plus/Plus';
import Layout from '../../shared/Layout';
import Loader from '../../shared/Loader';
import CategoryItem from './Components/CategoryItem';

const Categories = () => {
  const queryClient = useQueryClient();

  const handlePostSuccess = () => {
    queryClient.refetchQueries(['getCategories']);
  };

  const [name, setName] = useState('');

  const { data: categories, isLoading } = useGetCategories();

  const { mutate: postSubmit } = usePostCategory({
    onSuccess: handlePostSuccess,
  });

  const categoryEnabledItemsHTML = categories
    ?.filter((category) => category.isEnabled)
    .map((item) => <CategoryItem category={item} key={item.id} />);

  const categoryDisabledItemsHTML = categories
    ?.filter((category) => !category.isEnabled)
    .map((item) => <CategoryItem category={item} key={item.id} />);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleNewCategoryClick = () => {
    postSubmit({ name: name });
    setName('');
  };

  if (isLoading) return <Loader />;

  return (
    <Layout>
      <div className="intro">
        <div className="intro__left">
          <h1 className="intro__title">Kategorije </h1>
        </div>
      </div>
      <div className="category">
        <h3 className="category__title">Kategorije za Prijave</h3>
        <div className="category__container">
          <div className="category__holder">
            <input
              type="text"
              className="category__input"
              value={name}
              onChange={handleOnChange}
            />
            <button
              className="category__add-btn"
              onClick={handleNewCategoryClick}
            >
              <Plus />
              Dodaj kategoriju
            </button>
          </div>
          <div className="category__container">
            <h3>Aktivne Kategorije</h3>
            <div className="category__buttons">{categoryEnabledItemsHTML}</div>
          </div>
          <div className="category__container">
            <h3>Arhivirane Kategorije</h3>
            <div className="category__buttons">{categoryDisabledItemsHTML}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
