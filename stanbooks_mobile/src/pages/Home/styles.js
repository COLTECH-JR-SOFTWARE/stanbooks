import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const List = styled.FlatList`
  padding: 5px;
`;

export const Book = styled.View`
  width: 150px;
  margin: 0 5px 20px;
`;

export const ImageContainer = styled.View`
  background-color: #F6F6F6;
  height: 70%;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 5px;
  height: 160px;
`;

export const BookImage = styled.Image`
  flex: 1;
  width: null;
  height: null;
  resizeMode: contain;
`;

export const BookName = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #444;
  text-align: center;
`;
