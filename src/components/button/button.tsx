import * as React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {color, spacing} from '../../../theme';
import {ButtonProps} from './button.props';

const PRESET: ViewStyle = {
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[2],
  borderRadius: 6,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color.blue,
};

const TEXT_PRESET: TextStyle = {
  color: color.white,
};
export function Button(props: ButtonProps) {
  const {
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    disabled,
    loading,
    ...rest
  } = props;

  const viewStyles = [PRESET, styleOverride];

  const textStyles = [TEXT_PRESET, textStyleOverride];

  const content = children || <Text style={textStyles}>{text}</Text>;
  return (
    <TouchableOpacity
      style={viewStyles}
      disabled={disabled || loading}
      {...rest}>
      {content}
    </TouchableOpacity>
  );
}
