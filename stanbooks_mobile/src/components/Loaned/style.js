import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Book = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #FF6600
`;

export const LoanDate = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 2px;
`;

export const DeliveryDate = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 2px;
`;

export const LateDate = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 2px;
`;

export const Description = styled.Text`
  color: #111110;
  font-size: 13px;
  margin-top: 2px;
`;
