import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

function Spinner({ onSubmitEditing }) {
  return (
    <Container>
      <ActivityIndicator size={30} color={'#FF9933'}/>
    </Container>
  );
}

export default Spinner;
