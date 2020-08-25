import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Input, SearchBarIcon } from './styles';

function SearchBar({ onSubmitEditing }) {
  return (
    <Container>
      <Input
        placeholder="Pesquisar livro"
        returnKeyType='search'
        onSubmitEditing={onSubmitEditing}
      />
      <SearchBarIcon name="search" />
    </Container>
  );
}

export default SearchBar;
