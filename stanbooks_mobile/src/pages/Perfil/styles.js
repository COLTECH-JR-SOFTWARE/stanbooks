import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  padding: 0;
`;

export const LogoutButton = styled.TouchableOpacity`
  height: 50px;
  background-color: #fff;
  margin-top: 0px;
  align-items: stretch;
  justify-content: center;
  border: 1px solid rgba(255, 153, 51, 0.2);
`;

export const LinkText = styled.Text`
  color: #111110;
  font-size: 16px;
  padding: 15px;
`;

export const SectionTitle = styled.Text`
  color: #FF6600;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 15px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: rgba(17,17,19,0.2);
  margin: 0px 0 10px;
`;

export const Activities = styled.View`
  align-self: stretch;
`;

export const ProfileConfigure = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0;
`;


export const UserName = styled.Text`
  color: #FF6600;
  font-size: 20px;
  font-weight: bold;
`;

export const UserEmail = styled.Text`
  color: rgba(17, 17, 16, 0.5);
  font-size: 15px;
`;

