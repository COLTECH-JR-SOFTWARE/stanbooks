import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 10px;
  align-items: stretch;
`;

export const LinkText = styled.Text`
  color: #111110;
  font-size: 16px
`;