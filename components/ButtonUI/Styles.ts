import styled from 'styled-components/native';

export const Primary = styled.Pressable`
  width: 100%;
  height: 50px;
  border-radius: 16px;
  background-color: #018abe;
  color: #fff;
  flex-direction: row;
  align-items: center;
`;

export const Secondary = styled.Pressable`
  width: 100%;
  height: 50px;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  color: #fff;
`;

export const ContainerMargin = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const TextButtonPrimary = styled.Text`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-align: center;
`;

export const TextButtonSecondary = styled.Text`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  color: #00e0d5;
  text-align: center;
`;
