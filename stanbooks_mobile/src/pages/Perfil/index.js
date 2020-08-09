import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {Container, LogoutButton, LinkText} from './styles';

import { signOut } from '~/store/modules/auth/actions';

import DefaultBackground from '~/components/DefaultBackground';

const Perfil = () => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <DefaultBackground>
      <Container>
        <LogoutButton onPress={handleLogout}>
          <LinkText>Sair</LinkText>
        </LogoutButton>
      </Container>
    </DefaultBackground>
  );
}

export default Perfil;
