import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import api from '~services/api';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default function QRCode(){
  const scanner = useRef(null);
  const userToken = useSelector(state => state.auth.token);
  const config = {
    headers: { Authorization: `Bearer ${userToken}` }
  };

  function confirmAction(bookUrl){
    Alert.alert(
      "Novo empréstimo",
      "Deseja Emprestar esse livro? (nome do livro)",
      [
        {
          text: "Cancelar",
          onPress: () => scanner.current.reactivate(),
          style: "cancel"
        },
        { text: "OK", onPress: () => bookLoan(bookUrl) }
      ],
      { cancelable: false }
    );
  }

  async function bookLoan(bookUrl){
    try {
      const data = { link: bookUrl}

      await api.post('loan', data, config);

      alert('Empréstimo Realizado');
    }catch(err){
      console.log(err);
      alert('Falha no empréstimo')
    }

    scanner.current.reactivate();
  }

  return (
    <QRCodeScanner
      onRead={e => confirmAction(e.data)}
      flashMode={RNCamera.Constants.FlashMode.off}
      ref={scanner}
    />
  );
}
