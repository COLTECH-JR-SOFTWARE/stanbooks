import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import booksTest from '~/assets/books/sol.jpg'
import api from '~services/api';

import SearchBar from './SearchBar';

import styles from './styles';

export default function Home() {
  const [books, setBooks] = useState([]);
  const userToken = useSelector(state => state.auth.token);

  async function loadBooks(query){
    const { data } = await api.get('search/book', {
      headers: { Authorization: `Bearer ${userToken}` },
      params: { name: query }
    });
    console.log(data);
    setBooks(data);
  }

  return (
    <View style={styles.container}>
      <SearchBar onSubmitEditing={e => loadBooks(e.nativeEvent.text)}/>
      {books.length
        ? <Text style={styles.result}>Resultados da pesquisa</Text>
        : null
      }
      <FlatList
        style={styles.bookList}
        contentContainerStyle={styles.listContent}
        data={books}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={book => String(book.id)}
        renderItem={({ item: book })=>(
          <View style={styles.book}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' }} style={styles.imageBook}/>
            </View>
            <Text style={styles.bookName}>{book.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
