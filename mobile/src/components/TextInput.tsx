import React from 'react';
import {
  TextInput as TextInputNative,
  TextInputProps as TextInputPropsNative,
} from 'react-native';
import {ColorPallet} from '../resources/ColorPallet';
import {commonStyles} from './commonStyles';

type TextInputProps = TextInputPropsNative & {};

export const TextInput = (props: TextInputProps) => {
  return (
    <TextInputNative
      editable={props.editable}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
      placeholderTextColor={ColorPallet.lightGray}
      style={[commonStyles.inputField, props.style]}
    />
  );
};
