import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a'
  },
  header: {
    height: 175,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    marginTop: -34,
    paddingHorizontal: 24,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 52,
    backgroundColor: '#262626',
    padding: 16,
    color: '#f2f2f2',
    borderRadius: 6,
    marginRight: 4,
    borderWidth: 1,
  },
  button: {
    height: 52,
    paddingHorizontal: 18,
    borderRadius: 6,
    backgroundColor: '#1e6f9f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    marginTop: 16,
    marginHorizontal: 24,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tagWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  createdText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4ea8de',
  },
  doneText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8284fa'
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#333333',
    color: '#d9d9d9',
    fontWeight: 'bold',
    borderRadius: 999,
  },
  emptyListContainer: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#333333'
  },
  emptyListTitle: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080'
  },
  emptyListText: {
    fontSize: 14,
    color: '#808080'
  },
  tasks: {
    paddingHorizontal: 24,
  }
});