import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import style, { shadowOpt } from './style';
const { BoxShadow: Shadow } = require('react-native-shadow');

type Props = {
  style?: StyleProp<any>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  children: React.ReactNode;
};

export default function Paper({
  children,
  onPress,
  style: customStyle,
}: Props) {
  return (
    <Shadow
      setting={{ ...shadowOpt, style: { ...shadowOpt.style, ...customStyle } }}>
      <TouchableOpacity style={style.container} onPress={onPress}>
        {children}
      </TouchableOpacity>
    </Shadow>
  );
}
