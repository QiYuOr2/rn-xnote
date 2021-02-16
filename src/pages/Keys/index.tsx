import { DrawerNavigationProp } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import KeyDetail from '../KeyDetail';
import List from './list';

const Stack = createStackNavigator();

type Props = {
  navigation: DrawerNavigationProp<any>;
};

export default function Keys({ navigation }: Props) {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="List">
        {(props) => <List {...props} navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name="KeyDetail">
        {(props) => <KeyDetail {...props} navigation={props.navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
