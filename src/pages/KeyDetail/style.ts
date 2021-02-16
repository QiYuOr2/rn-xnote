import { StyleSheet } from 'react-native';
import theme from '../../var';

export default StyleSheet.create({
  input: {
    margin: 0,
    padding: 0,
    width: theme.full.width(0.8),
    fontSize: theme.font.medium,
  },
  siteLabel: {
    marginTop: theme.full.height(0.02),
    marginBottom: theme.full.height(0.005),
    marginLeft: theme.full.width(0.02),
  },
  deleteBtn: {
    marginTop: theme.full.height(0.05),
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    width: theme.full.width(1),
    textAlign: 'center',
    color: theme.color.red,
  },
});
