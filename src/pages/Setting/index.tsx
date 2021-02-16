import {DrawerNavigationProp} from '@react-navigation/drawer';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import {ScrollView, Switch} from 'react-native-gesture-handler';
import CustomText from '../../components/CustomText';
import Layout from '../../components/Layout';
import Storage from '../../utils/storage';
import theme from '../../var';

type Props = {
  navigation: DrawerNavigationProp<any>;
};

export default function Setting({navigation}: Props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Layout isTop title="设置" navigation={navigation}>
      <ScrollView>
        <ListItem
          bottomDivider
          onPress={() => {
            console.log('url');
          }}>
          <ListItem.Content>
            <ListItem.Title>项目地址</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={theme.arrow.size} />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <View style={style.item}>
              <CustomText>指纹</CustomText>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor="#f4f3f4"
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </ListItem.Content>
        </ListItem>
        <ListItem
          onPress={() => {
            Storage.clear();
          }}>
          <ListItem.Content>
            <ListItem.Title>清空数据</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
    </Layout>
  );
}

const style = StyleSheet.create({
  item: {
    width: theme.full.width(0.95),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
