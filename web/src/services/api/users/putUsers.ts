import { axiosRequest } from '../../axiosConfig';
import { IUserResponse, UserRole } from './getUsers';

export interface IPutUsersRequest {
  firstName: string;
  lastName: string;
  username: string;
  isActive: boolean;
  role: UserRole;
}

export interface IPutUsersWithId {
  id: string;
  putData: IPutUsersRequest;
}

export const putUsers = async (
  updateData: IPutUsersWithId
): Promise<IUserResponse> => {
  const { data } = await axiosRequest(
    'PUT',
    '/api/admin/Users/' + updateData.id,
    {
      data: updateData.putData,
    }
  );

  return data;
};
