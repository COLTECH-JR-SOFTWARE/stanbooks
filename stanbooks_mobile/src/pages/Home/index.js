import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import booksTest from '~/assets/books/sol.jpg'

import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput}/>
        <Icon name="search" size={28} style={{color: '#7159C1'}} />
      </View>
      <Text style={styles.result}>Resultados da pesquisa</Text>
      <FlatList
        style={styles.bookList}
        contentContainerStyle={styles.listContent}
        data={[1,2,3]}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={book => String(book)}
        renderItem={({ item })=>(
          <View style={styles.book}>
            <View style={styles.imageContainer}>
              <Image source={booksTest} style={styles.imageBook}/>
            </View>
            <Text style={styles.bookName}>O pequeno princip</Text>
          </View>
        )}
      />
    </View>
  );
};
