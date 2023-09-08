import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;

  textColorScheme?: 'light' | 'dark';
  textColor?: string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * One of the different types of text presets.
   */
  colorScheme?: 'light' | 'dark';

  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode;

  loading?: boolean;
}
