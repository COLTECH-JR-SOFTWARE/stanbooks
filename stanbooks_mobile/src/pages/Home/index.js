import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import booksTest from '~/assets/books/sol.jpg'
import api from '../../services/api';

import styles from './styles';

export default function Home() {
  const [books, setBooks] = useState([]);
  const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk1MDMxNzIzLCJleHAiOjE1OTU2MzY1MjN9.Yle4L0V6bl1_Bu9zPCpSbcGD2qlE7I_T8A5w1-ZWG74';

  async function loadBooks(query){
    const { data } = await api.get('books/search', {
      headers: { Authorization: `Bearer ${userToken}` },
      params: { name: query }
    });

    setBooks(data);
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          returnKeyType='search'
          onSubmitEditing={e => loadBooks(e.nativeEvent.text)}
        />
        <Icon name="search" size={28} style={{color: '#7159C1'}} />
      </View>
      <Text style={styles.result}>Resultados da pesquisa</Text>
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
              <Image source={booksTest} style={styles.imageBook}/>
            </View>
            <Text style={styles.bookName}>{book.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
