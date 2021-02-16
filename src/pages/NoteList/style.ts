import { StyleSheet } from 'react-native';
import theme from '../../var';

export default StyleSheet.create({
  title: {
    fontSize: theme.font.medium,
    color: theme.color.primaryText,
    marginBottom: 2,
  },
  lastNote: {
    marginBottom: theme.full.height(0.015),
  },
  content: {
    marginBottom: 'auto',
  },
  addButton: {
    width: theme.full.width(0.14),
    height: theme.full.width(0.14),
    borderRadius: theme.full.width(0.07),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2289dc',
    fontSize: theme.font.large,
    position: 'absolute',
    right: theme.full.width(0.05),
    bottom: theme.full.height(0.04),
    zIndex: 99,
  },
  noNote: {
    display: 'flex',
    marginTop: theme.full.height(0.05),
    alignItems: 'center',
  },
});
