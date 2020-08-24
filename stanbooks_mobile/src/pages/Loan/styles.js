import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.SafeAreaView`
  flex-direction: row
`;

export const ArrowBack = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const Title = styled.Text`
  padding: 0 23% 0;
  flex-direction: row;
  font-size: 20px;
  color: #111110;
  font-weight: bold;
  align-self: center;
  margin-top: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30}
})``;
