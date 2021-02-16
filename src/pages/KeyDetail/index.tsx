import { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { ListItem } from 'react-native-elements';
import Layout from '../../components/Layout';
import { TextInput } from 'react-native-gesture-handler';
import style from './style';
import CustomText from '../../components/CustomText';
import theme from '../../var';

type Props = {
  route?: RouteProp<{ params: { title: string } }, any>;
  navigation: DrawerNavigationProp<any>;
};

export default function KeyDetail({ navigation, route }: Props) {
  return (
    <Layout
      title={route?.params?.title}
      navigation={navigation}
      rightComponent={{
        text: '保存',
        style: { color: '#fff', fontSize: theme.font.small },
        onPress: () => {
          console.log('save');
        },
      }}>
      <View>
        <ListItem bottomDivider>
          <ListItem.Title>账号</ListItem.Title>
          <ListItem.Content>
            <TextInput placeholder="账号" style={style.input} />
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Title>密码</ListItem.Title>
          <ListItem.Content>
            <TextInput placeholder="密码" style={style.input} />
          </ListItem.Content>
        </ListItem>
        <CustomText style={style.siteLabel}>网站</CustomText>
        <ListItem>
          <TextInput
            placeholder="密码"
            style={style.input}
            value={'www.bilibili.com'}
          />
        </ListItem>

        <ListItem
          style={style.deleteBtn}
          onPress={() => {
            console.log('delete');
          }}>
          <CustomText style={style.deleteText}>删除密码</CustomText>
        </ListItem>
      </View>
    </Layout>
  );
}
