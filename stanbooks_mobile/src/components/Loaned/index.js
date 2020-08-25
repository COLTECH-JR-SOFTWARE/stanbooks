import React from 'react';
import desconhecido from '~/assets/PNG/simbolo-colorido-flat-rounded.png';

import { Container, Left, Book, Info, Name, LoanDate, DeliveryDate, LateDate, Description } from './style';

const Loaned = ({ data }) => {
  return (
    <Container>
      <Left>
        <Book
          source={desconhecido}
        />

        <Info>
          <Name>{data.Book.name}</Name>
          <Description>Empréstimo: <LoanDate>17/08/2020</LoanDate></Description>
          <Description>Entrega: <DeliveryDate>20/08/2020</DeliveryDate></Description>
          <Description>Dias atrasados: <LateDate>0</LateDate></Description>
        </Info>

      </Left>
    </Container>
  );
}

export default Loaned;
