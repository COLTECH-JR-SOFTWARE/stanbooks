import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import { Container, ArrowBack, SignLink, Title, List , Header} from './styles';

import Loaned from '~/components/Loaned';
import DefaultBackground from '~/components/DefaultBackground';

const data = [1, 2, 3, 4, 5];

const Loan = ({navigation}) => {
  const [loaned, setLoaned] = useState([]);

  useEffect(() => {
    async function loadLoaned() {
      const response = await api.get('loan');

      setLoaned(response.data);
    }

    loadLoaned();

  },[])

  return (
    <DefaultBackground>
      <Container>
        <Header>
          <ArrowBack>
            <SignLink onPress={() => navigation.navigate('Navigation')}>
              <MaterialIcons name="arrow-back" size={28} color="#FF6600"/>
            </SignLink>
          </ArrowBack>

          <Title>Empréstimo</Title>
        </Header>

        <List
          data={loaned}
          keyExtractor={item => String(item)}
          renderItem={({item}) => (
            <Loaned data={item}/>
          )}
        />
      </Container>
    </DefaultBackground>
  );
}

export default Loan;
