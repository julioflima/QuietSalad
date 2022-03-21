import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 16px;
`;

export const ContainerMargin = styled.View`
  margin-top: 10px;
`;

export const Primary = styled(Container)`
  background-color: #018abe;
  color: #fff;
`;

export const Secondary = styled(Container)`
  background-color: transparent;
  color: #fff;
`;

export const ContainerView = styled(Container)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const TextButtonPrimary = styled.Text`
  display: flex;
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-align: center;
`;

export const TextButtonSecondary = styled.Text`
  display: flex;
  flex: 1;
  font-size: 16px;
  color: #00e0d5;
  text-align: center;
`;
