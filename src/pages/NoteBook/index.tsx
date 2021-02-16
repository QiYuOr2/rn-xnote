import { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Accordion from '../../components/Accordion';
import Layout from '../../components/Layout';

type Props = {
  navigation: DrawerNavigationProp<any>;
};

export default function NoteBook({ navigation }: Props) {
  return (
    <Layout isTop title="本页面尚未完成" navigation={navigation}>
      <ScrollView>
        <Accordion
          title="JavaScript"
          list={[{ label: '变量' }, { label: 'Promise' }]}
        />
        <Accordion
          title="Go"
          list={[{ label: '结构体' }, { label: 'Gin' }, { label: '中间件' }]}
        />
        <Accordion title="默认笔记本" list={[{ label: '暂无' }]} />
      </ScrollView>
    </Layout>
  );
}
