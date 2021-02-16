import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Keys from '../../pages/Keys';
import NoteBook from '../../pages/NoteBook';
import NoteList from '../../pages/NoteList';
import Setting from '../../pages/Setting';
import CustomText from '../CustomText';
import style from './style';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={style.header}>
        <CustomText>XNote</CustomText>
      </View>
      <DrawerItemList
        {...props}
        activeTintColor="#2289dc"
        inactiveTintColor="#616161"
      />
    </DrawerContentScrollView>
  );
};

const routes = [
  { name: 'NoteList', title: '所有笔记', icon: 'note', component: NoteList },
  { name: 'NoteBook', title: '笔记本', icon: 'book', component: NoteBook },
  { name: 'Keys', title: '密码本', icon: 'vpn-key', component: Keys },
  { name: 'Setting', title: '设置', icon: 'settings', component: Setting },
];

export default function Nav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        {routes.map((route, index) => (
          <Drawer.Screen
            key={index}
            component={route.component}
            name={route.name}
            options={{
              title: route.title,
              drawerIcon: (props) => (
                <Icon
                  name={route.icon}
                  color={props.color}
                  size={26}
                  style={style.icon}
                />
              ),
            }}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
