import { DrawerNavigationProp } from '@react-navigation/drawer';
import dayjs from 'dayjs';
import React from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import CustomText from '../../components/CustomText';
import Paper from '../../components/Paper';
import { Action } from '../Note';
import style from './style';

type Props = {
  id: string;
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  date: Date | string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<TextStyle>;
  navigation: DrawerNavigationProp<any>;
};

export default function Item({
  id,
  title,
  content,
  date,
  titleStyle,
  contentStyle,
  style: itemStyle,
  navigation,
}: Props) {
  return (
    <Paper
      style={itemStyle}
      onPress={() => {
        navigation.navigate('Note', { action: Action.find, id });
      }}>
      <View>
        <CustomText style={{ ...style.title, ...(titleStyle as Object) }}>
          {title}
        </CustomText>
      </View>
      <View style={style.content}>
        <CustomText style={contentStyle}>{content}</CustomText>
      </View>
      <View>
        <CustomText>{dayjs(date).format('YYYY-MM-DD HH:mm:ss')}</CustomText>
      </View>
    </Paper>
  );
}
