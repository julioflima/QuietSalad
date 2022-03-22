import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f4f6fa;
  padding: 10px 30px;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ButtonsContainer = styled.View`
  justify-content: space-between;
  flex-direction: column;
  flex: 1;

  & + & {
    margin-top: 10px;
  }
`;
