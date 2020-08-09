import React from 'react';

import { Message } from './styles';

function ResultMessage({ resultLength, found }) {
  const actualMessage = () => {
    if(!found){
      return 'Nenhum resultado encontrado'
    }
    if(found && resultLength){
      return 'Resultados da pesquisa';
    }
  }

  return (
    <Message>{actualMessage()}</Message>
  );
}

export default ResultMessage;
