import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const scale = width / 320;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const theme = {
  full: {
    width: (times: number) => width * times,
    height: (times: number) => height * times,
  },
  font: {
    mini: normalize(12),
    small: normalize(15),
    medium: normalize(17),
    large: normalize(20),
    xlarge: normalize(24),
  },
  color: {
    primaryText: '#000',
    secondaryText: '#6d6d6d',
    red: '#f5222d',
  },
  borderRadius: {
    default: 4,
  },
  arrow: {
    size: 25,
  },
};
export default theme;
