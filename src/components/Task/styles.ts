import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 62,
    backgroundColor: '#262626',
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },
  inactiveContainer: {
    borderColor: '#262626',
  },
  checkboxArea: {
    height: 62,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxBase: {
    width: 17,
    height: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#4ea8de',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#5e60ce',
    borderColor: '#5e60ce',
  },
  text: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: '#f2f2f2'
  },
  textStrikethrough: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
  deleteButton: {
    height: 62,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
});