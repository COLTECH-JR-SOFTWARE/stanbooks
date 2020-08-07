import React from 'react';
import { useSelector } from 'react-redux';

import DefaultBackground from './components/DefaultBackground';

import Routes from './Routes';

export default function App(){
  const signed = useSelector(state => state.auth.signed);

  return (
    <DefaultBackground>
      <Routes signed={signed} />
    </DefaultBackground>
  )
}
