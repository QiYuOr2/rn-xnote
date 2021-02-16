import { StyleSheet } from 'react-native';
import theme from '../../var';

export default StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: theme.full.width(0.05),
    height: 50,
    flexDirection: 'row',

    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
  },
  headerText: { color: theme.color.primaryText },
  headerBorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
  },
  content: {
    paddingHorizontal: theme.full.width(0.05),
    backgroundColor: '#fdfdfd',
    overflow: 'hidden',
  },
  contentRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  icon: {
    transform: [{ rotate: '-90deg' }],
  },
  activeIcon: {
    transform: [{ rotate: '0deg' }],
  },
});
