import { DrawerNavigationProp } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import { DeviceEventEmitter, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../../components/CustomText';
import Layout from '../../components/Layout';
import { NOTELIST, Note } from '../../utils/noteHelper';
import Storage from '../../utils/storage';
import theme from '../../var';
import { Action } from '../Note';
import Item from './item';
import style from './style';

type Props = {
  navigation: DrawerNavigationProp<any>;
};

export default function List({ navigation }: Props) {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchData = async () => {
    const data = (await Storage.get<Note[]>(NOTELIST)) ?? [];
    setNotes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  DeviceEventEmitter.addListener('refresh', () => {
    console.log('收到刷新请求');
    fetchData();
  });

  return (
    <Layout isTop title="所有笔记" navigation={navigation}>
      {notes.length > 0 ? (
        <ScrollView>
          {notes.map((item, index) =>
            notes.length - 1 === index ? (
              <Item
                navigation={navigation}
                key={index}
                style={style.lastNote}
                id={item?.id.toString()}
                title={item?.title}
                content={item?.content}
                date={item?.date}
              />
            ) : (
              <Item
                navigation={navigation}
                key={index}
                id={item?.id.toString()}
                title={item?.title}
                content={item?.content}
                date={item?.date}
              />
            ),
          )}
        </ScrollView>
      ) : (
        <View style={style.noNote}>
          <CustomText>暂无笔记</CustomText>
        </View>
      )}
      <TouchableOpacity
        style={style.addButton}
        onPress={() => {
          navigation.navigate('Note', { action: Action.add });
        }}>
        <Icon name="add" color="#fff" size={theme.font.xlarge} />
      </TouchableOpacity>
    </Layout>
  );
}
