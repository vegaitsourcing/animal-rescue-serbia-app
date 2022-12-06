import React from 'react';
import {StyleSheet, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {CustomButton} from '../components/CustomButton';
import {EmptySpace} from '../components/EmptySpace';
import {ScreenRootContainer} from '../components/ScreenRootContainer';
import {TextInput} from '../components/TextInput';
import {useAppDispatch} from '../hooks/storeHooks';
import {
  setProfileUpdateData,
  updateProfile,
} from '../store/src/profile/actions';

export const ProfileUpdateScreen = () => {
  const dispatch = useAppDispatch();

  const handleUpdateUserInfo = async () => {
    const result = await dispatch(updateProfile());
    if (result.meta.requestStatus === 'rejected') {
      Toast.show({
        type: 'error',
        text1: 'Azuriranje profila nije uspelo',
        text2: 'Molimo proverite podatke i pokusajte ponovo',
        position: 'bottom',
      });
      return;
    }
    Toast.show({
      type: 'success',
      text1: 'Azuriranje uspesno',
      position: 'bottom',
    });
  };

  return (
    <ScreenRootContainer title="Uredi profil">
      <View style={styles.screenContainer}>
        <TextInput
          placeholder={'Ime'}
          onChangeText={text =>
            dispatch(setProfileUpdateData({firstName: text}))
          }
        />
        <TextInput
          placeholder={'Prezime'}
          onChangeText={text =>
            dispatch(setProfileUpdateData({lastName: text}))
          }
        />
        <TextInput
          placeholder={'Korisnicko ime'}
          onChangeText={text =>
            dispatch(setProfileUpdateData({username: text}))
          }
        />
        <EmptySpace height={40} />
        <CustomButton text={'Sacuvaj'} onPress={handleUpdateUserInfo} />
      </View>
    </ScreenRootContainer>
  );
};

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
});
