import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import api from '~services/api';
import SearchBar from './SearchBar';
import ResultMessage from './ResultMessage';
import DefaultBackground from '~/components/DefaultBackground';
import { Container, List, Book, ImageContainer, BookImage, BookName } from './styles';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [found, setFound] = useState(true);
  const [loading, setLoading] = useState(false);
  const userToken = useSelector(state => state.auth.token);

  async function loadBooks(query){
    setLoading(true);
    try{
      const { data } = await api.get('search/book', {
        headers: { Authorization: `Bearer ${userToken}` },
        params: { name: query }
      });

      setFound(data.length);
      setBooks(data);
    }catch(err){
      alert('Falha na conexão');
    }

    setLoading(false);
  }

  return (
    <Container>
      <SearchBar onSubmitEditing={e => loadBooks(e.nativeEvent.text)}/>
      <ResultMessage found={found} resultLength={books.length}/>
      {loading ? <ActivityIndicator size={28} color={'#FF9933'}/> : null}
      <List
        data={books}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={book => String(book.id)}
        renderItem={({ item: book })=>(
          <Book>
            <ImageContainer>
              <BookImage source={{ uri: book.File.url_image }} />
            </ImageContainer>
            <BookName>{book.name}</BookName>
          </Book>
        )}
        />
    </Container>
  );
};
