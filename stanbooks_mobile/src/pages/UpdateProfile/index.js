import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, Form, FormInput, Separator, SubmitButton, ArrowBack, SignLink, Header } from './styles';

import DefaultBackground from '~/components/DefaultBackground';

import {updateProfileRequest} from '~/store/modules/user/actions';

const UpdateProfile = ({navigation}) => {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  const oldPasswordRef =  useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();


  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  function handleSubmit() {
    dispatch(updateProfileRequest({
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    }));
  }

  return (
    <DefaultBackground>
      <Container>
      <Header>
        <ArrowBack>
          <SignLink onPress={() => navigation.navigate('Navigation')}>
            <MaterialIcons name="arrow-back" size={28} color="#FF6600"/>
          </SignLink>
        </ArrowBack>

        <Title>Atualizar perfil</Title>
      </Header>

        <Form>
        <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua nova senha"
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirmação de senha"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>

        </Form>
      </Container>
    </DefaultBackground>
  );
}

export default UpdateProfile;
