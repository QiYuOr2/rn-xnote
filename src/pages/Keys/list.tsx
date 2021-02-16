import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {ListItem, Overlay} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import CustomText from '../../components/CustomText';
import Layout from '../../components/Layout';

type Props = {
  navigation: DrawerNavigationProp<any>;
};

const keys = [
  {
    url: 'bilibili',
    account: '1176281967@qq.com',
    password: '123456',
  },
  {
    url: 'github',
    account: 'tuzilow',
    password: '123456',
  },
  {
    url: 'qq',
    account: '1176281967',
    password: '123456',
  },
  {
    url: 'mc',
    account: '1176281967@qq.com',
    password: '123456',
  },
  {
    url: 'apple',
    account: '1176281967@qq.com',
    password: '123456',
  },
];

export default function List({navigation}: Props) {
  return (
    <>
      <Layout isTop title="密码本" navigation={navigation}>
        <ScrollView>
          {keys.map((item, index) => (
            <ListItem
              key={index}
              bottomDivider={index !== keys.length - 1}
              onPress={() => {
                navigation.navigate('KeyDetail', {
                  title: item.url,
                });
              }}>
              <ListItem.Content>
                <ListItem.Title>{item.url}</ListItem.Title>
                <ListItem.Subtitle>{item.account}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
        <Overlay isVisible={false}>
          <CustomText>指纹</CustomText>
        </Overlay>
      </Layout>
    </>
  );
}
