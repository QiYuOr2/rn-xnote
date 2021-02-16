import React, {useEffect, useRef, useState} from 'react';
import {Platform, Dimensions, DeviceEventEmitter} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import {TextInput} from 'react-native-gesture-handler';
import {RouteProp} from '@react-navigation/native';
import {BottomSheet, ListItem} from 'react-native-elements';
import style from './style';
import theme from '../../var';
import Layout from '../../components/Layout';
import NoteHelper from '../../utils/noteHelper';

export enum Action {
  find = 1,
  add,
}

type Props = {
  route?: RouteProp<{params: {action: Action; id: string}}, any>;
  navigation: DrawerNavigationProp<any>;
};

export default function Note({navigation, route}: Props) {
  const webviewRef = useRef<WebView>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const options = `window.options=${JSON.stringify({
    mode: 'ir',
    toolbar: [],
    outline: false,
    debugger: false,
    placeholder: '可使用markdown语法...',
  })}`;

  const action = route?.params?.action;
  const id = route?.params?.id;

  //#region action === Action.find
  useEffect(() => {
    const fetchData = async () => {
      const note = await NoteHelper.find(id ?? '');
      setContent(note?.content ?? '');
      setTitle(note?.title ?? '');
    };
    if (action === Action.find) {
      fetchData();
    }
  }, [action, id]);

  // 初始化文章内容
  useEffect(() => {
    webviewRef.current?.postMessage(content);
  }, [content]);
  const injectJavaScript = `vditor.setValue('${content}')`;
  //#endregion

  const onMessage = (e: WebViewMessageEvent) => {
    const data = JSON.parse(e.nativeEvent.data);
    if (data.type === 'onChange') {
      setContent(data.message);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const modalConfig = [
    {
      label: '删除',
      style: {color: theme.color.red},
      onPress: async () => {
        await NoteHelper.remove(id);
        DeviceEventEmitter.emit('refresh');
        navigation.navigate('List');
      },
    },
    {
      label: '取消',
      onPress: () => setModalVisible(false),
    },
  ];

  return (
    <Layout
      navigation={navigation}
      title={action === Action.add ? '新的笔记' : ' '}
      rightComponent={{
        icon: 'keyboard-control',
        color: '#fff',
        onPress: () => {
          setModalVisible(true);
        },
      }}
      onLeftClick={async () => {
        action === Action.add
          ? content && (await NoteHelper.save(title, content))
          : await NoteHelper.update(id, title, content);
        DeviceEventEmitter.emit('refresh');
      }}>
      <TextInput
        placeholder="请输入标题"
        style={style.title}
        value={title}
        onChangeText={(v) => setTitle(v)}
      />
      <WebView
        ref={webviewRef}
        onMessage={onMessage}
        javaScriptEnabled
        source={
          Platform.OS === 'ios'
            ? require('../../../assets/vditor.html')
            : {uri: 'file:///android_asset/vditor.html'}
        }
        injectedJavaScriptBeforeContentLoaded={options}
        injectedJavaScript={injectJavaScript}
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
      />
      <BottomSheet isVisible={modalVisible} modalProps={{}}>
        {modalConfig.map((item, index) => (
          <ListItem onPress={item.onPress} key={index}>
            <ListItem.Content>
              <ListItem.Title style={item.style}>{item.label}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </Layout>
  );
}
