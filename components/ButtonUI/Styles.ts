import styled from 'styled-components/native';

const Container = styled.Pressable`
  width: 100%;
  height: 50px;
`;

export const Primary = styled(Container)`
  width: 100%;
  height: 50px;
  background-color: #018abe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
`;

export const Secondary = styled(Container)`
  width: 100%;
  height: 50px;
  background-color: transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
`;

export const TextButtonPrimary = styled.Text`
  font-size: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  color: #fff;
`;

export const SecondaryButtonPrimary = styled.Text`
  font-size: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #00e0d5;
`;
