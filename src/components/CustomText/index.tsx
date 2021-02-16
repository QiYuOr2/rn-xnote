import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import theme from '../../var';

type Props = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

export default function CustomText({ children, style: customStyle }: Props) {
  const textStyle = {
    ...style.default,
    ...(customStyle as Object),
  };
  return <Text style={textStyle}>{children}</Text>;
}

const style = StyleSheet.create({
  default: {
    fontSize: theme.font.small,
    color: theme.color.secondaryText,
  },
});
