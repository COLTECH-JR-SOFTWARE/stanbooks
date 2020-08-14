import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container, ArrowBack, SignLink } from './styles';

const Loan = ({navigation}) => {
  return (
    <Container>
      <ArrowBack>
        <SignLink onPress={() => navigation.navigate('Navigation')}>
          <MaterialIcons name="arrow-back" size={28} color="#FF6600"/>
        </SignLink>
      </ArrowBack>
    </Container>
  );
}

export default Loan;
