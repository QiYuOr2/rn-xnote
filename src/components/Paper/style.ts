import { StyleSheet } from 'react-native';
import theme from '../../var';

const height = theme.full.height(0.15);

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height,
    borderRadius: theme.borderRadius.default,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

export const shadowOpt = {
  width: theme.full.width(0.96),
  height,
  style: {
    marginHorizontal: theme.full.width(0.02),
    marginTop: theme.full.height(0.015),
  },
  color: '#000',
  border: 1.5,
  radius: 3,
  opacity: 0.15,
  x: 0.5,
  y: 1,
};
