import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Container, LogoutButton, LinkText, Separator, SectionTitle, Activities, UserName, UserEmail, ProfileConfigure, ImageConfigure} from './styles';

import { signOut } from '~/store/modules/auth/actions';

import DefaultBackground from '~/components/DefaultBackground';

const Perfil = ({navigation}) => {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <DefaultBackground>
      <Container>
        <ProfileConfigure>
          <Icon name="user-alt" size={80} color="#FF6600"/>

          <UserName>{profile.name}</UserName>
          <UserEmail>{profile.email}</UserEmail>
        </ProfileConfigure>

        <Activities>

          <SectionTitle>Atividades</SectionTitle>

          <Separator />

          <LogoutButton onPress={() => navigation.navigate('Loan')} >
            <LinkText>Empréstimos</LinkText>
          </LogoutButton>

          <LogoutButton onPress={() => navigation.navigate('Delayed')} >
            <LinkText>Atrasados</LinkText>
          </LogoutButton>

          <LogoutButton onPress={() => navigation.navigate('Booking')} >
            <LinkText>Reservas</LinkText>
          </LogoutButton>

          <SectionTitle>Minha conta</SectionTitle>

          <Separator />

          <LogoutButton onPress={() => navigation.navigate('UpdateProfile')} >
            <LinkText>Atualizar perfil</LinkText>
          </LogoutButton>

          <LogoutButton onPress={handleLogout}>
            <LinkText>Sair</LinkText>
          </LogoutButton>
        </Activities>
      </Container>
    </DefaultBackground>
  );
}

export default Perfil;
