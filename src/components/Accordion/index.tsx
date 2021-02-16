import React, { useRef, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../var';
import CustomText from '../CustomText';
import style from './style';

export type AccordionData = {
  label: string;
  onClick?: Function;
  icon?: React.ReactNode | string;
};

type Props = {
  title: string | React.ReactNode;
  list: AccordionData[];
};

export default function Accordion({ title, list }: Props) {
  const [visible, setVisible] = useState(false);

  // 展开动画
  const swfitAnim = useRef(new Animated.Value(0)).current;
  const swfitIn = () => {
    Animated.timing(swfitAnim, {
      toValue: list.length * 40,
      duration: 150,
      easing: Easing.ease,
    }).start();
  };
  const swfitOut = () => {
    Animated.timing(swfitAnim, {
      toValue: 0,
      duration: 200,
      easing: Easing.ease,
    }).start();
  };

  // 三角旋转动画
  const spinAnim = useRef(new Animated.Value(1)).current;
  const spinDown = () => {
    Animated.timing(spinAnim, {
      toValue: 0,
      duration: 150,
      easing: Easing.ease,
    }).start();
  };
  const spinRight = () => {
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 150,
      easing: Easing.ease,
    }).start();
  };
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-90deg'],
  });

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (visible) {
            swfitOut();
            spinRight();
          } else {
            swfitIn();
            spinDown();
          }
          setVisible((v) => !v);
        }}>
        <View style={[style.header, visible && style.headerBorderBottom]}>
          <View>
            <CustomText style={style.headerText}>{title}</CustomText>
          </View>
          <Animated.View style={[{ transform: [{ rotate: spin }] }]}>
            <Icon
              name="keyboard-arrow-down"
              color={theme.color.primaryText}
              size={25}
            />
          </Animated.View>
        </View>
      </TouchableOpacity>
      <Animated.View style={[style.content, { height: swfitAnim }]}>
        {list.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[style.contentRow]}
            onPress={() => item.onClick}>
            <CustomText>{item.label}</CustomText>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
}
