import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Header = styled.SafeAreaView`
  flex-direction: row
`;

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  padding: 0 23% 0;
  font-size: 20px;
  color: #111110;
  font-weight: bold;
  align-self: center;
  margin-top: 15px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30}
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: rgba(17,17,19,0.2);
  margin: 20px 0 30px;

`;

export const ArrowBack = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;
