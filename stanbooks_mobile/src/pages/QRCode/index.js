import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import api from '~services/api';
import Spinner from './Spinner';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default function QRCode(){
  const [loading, setLoading] = useState(false);
  const userToken = useSelector(state => state.auth.token);
  const config = {
    headers: { Authorization: `Bearer ${userToken}` }
  };

  async function loadNameBook(bookId){
    try {
      const { data: book } = await api.get(`books/${bookId}`);
      return book[0].name;
    } catch(err){
      console.log(err);
    }
  }

  async function confirmAction(bookId){
    setLoading(true);
    try{
      const bookName = await loadNameBook(bookId);

      Alert.alert(
        "Novo empréstimo",
        `Deseja emprestar o livro ${bookName}?`,
        [
          {
            text: "Cancelar",
            onPress: () => setLoading(false),
            style: "cancel"
          },
          { text: "OK", onPress: () => bookLoan(bookId) }
        ],
        { cancelable: false }
      );
    }catch(err){
      alert('Falha na conexão');
    }
  }

  async function bookLoan(bookId){
    try {
      const data = { link: bookId}

      await api.post('loan', data, config);

      alert('Empréstimo Realizado');
    }catch(err){
      console.log(err);
      alert('Falha no empréstimo')
    }

    setLoading(false)
  }

  return (
    <>
      { loading ? <Spinner /> :
        <QRCodeScanner
          onRead={e => confirmAction(e.data)}
          flashMode={RNCamera.Constants.FlashMode.off}
        />
      }
    </>
  );
}
