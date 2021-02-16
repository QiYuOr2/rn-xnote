import { DrawerNavigationProp } from '@react-navigation/drawer';
import React, { ReactNode } from 'react';
import { Header, HeaderIcon, TextProps } from 'react-native-elements';
import theme from '../../var';

type Props = {
  navigation: DrawerNavigationProp<any>;
  title?: string;
  isTop?: boolean;
  rightComponent?:
    | React.ReactElement<
        {},
        | string
        | ((props: any) => React.ReactElement<any, any> | null)
        | (new (props: any) => React.Component<any, any, any>)
      >
    | TextProps
    | HeaderIcon
    | undefined;
  onLeftClick?: Function;
  children: ReactNode;
};

export default function Layout({
  navigation,
  isTop = false,
  title = 'XNote',
  onLeftClick,
  children,
  rightComponent,
}: Props) {
  return (
    <>
      {isTop ? (
        <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => {
              onLeftClick?.();
              navigation.toggleDrawer();
            },
          }}
          centerComponent={{
            text: title,
            style: { color: '#fff', fontSize: theme.font.medium },
          }}
          rightComponent={rightComponent}
        />
      ) : (
        <Header
          leftComponent={{
            icon: 'chevron-left',
            size: theme.arrow.size,
            color: '#fff',
            onPress: () => {
              onLeftClick?.();
              navigation.goBack();
            },
          }}
          centerComponent={{
            text: title,
            style: { color: '#fff', fontSize: theme.font.medium },
          }}
          rightComponent={rightComponent}
        />
      )}
      {children}
    </>
  );
}
