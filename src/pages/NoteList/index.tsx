import { DrawerNavigationProp } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Note from '../Note';
import List from './list';

const Stack = createStackNavigator();

type Props = {
  navigation: DrawerNavigationProp<any>;
};

export default function NoteList({ navigation }: Props) {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="List">
        {(props) => <List {...props} navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name="Note">
        {(props) => <Note {...props} navigation={props.navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
