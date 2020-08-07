import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  result: {
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 15,
    color: '#444',
  },
  searchBar : {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 6,
    paddingHorizontal: 8
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 6
  },
  bookList: {
    padding: 5
  },
  listContent: {
    alignItems: 'center',
  },
  book: {
    width: 150,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  bookNameContainer: {
    backgroundColor: 'blue'
  },
  bookName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
    textAlign: 'center',
  },
  imageContainer: {
    backgroundColor: '#F6F6F6',
    height: '70%',
    borderRadius: 6,
    padding: 15,
    marginBottom: 5,
    height: 160,
  },
  imageBook: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});
