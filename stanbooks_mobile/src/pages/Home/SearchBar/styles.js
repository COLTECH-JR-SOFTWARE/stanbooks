import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #C9C9C9;
  border-radius: 6px;
  padding: 0 8px;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  padding: 8px 0;
  flex: 1;
`;

export const SearchBarIcon = styled(Icon)`
  color: #FF9933;
  font-size: 28px;
`;
