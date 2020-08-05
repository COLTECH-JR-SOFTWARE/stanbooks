import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import booksTest from '~/assets/books/sol.jpg'
import background from '~/assets/PNG/simbolo-colorido-flat.png'

import api from '../../services/api';

import styles from './styles';

export default function Home() {
  const [books, setBooks] = useState([]);
  const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk1ODcxNjM2LCJleHAiOjE1OTY0NzY0MzZ9.SzahPFV81KmweNHjp7X9ejHEWpjj1THjz7IHTmKA8aI';

  async function loadBooks(query){
    const { data } = await api.get('search/book', {
      headers: { Authorization: `Bearer ${userToken}` },
      params: { name: query }
    });

    setBooks(data);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background} imageStyle={styles.backgroundImage}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          returnKeyType='search'
          onSubmitEditing={e => loadBooks(e.nativeEvent.text)}
        />
        <Icon name="search" size={28} style={{color: '#FF6600'}} />
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
              <Image
                source={{uri: `http://192.168.0.36:3333/files/${book.File.image}`}}
                style={styles.imageBook}
              />
            </View>
            <Text style={styles.bookName}>{book.name}</Text>
          </View>
        )}
      />
    </ImageBackground>
    </View>
  );
};
