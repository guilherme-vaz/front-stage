import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #333; /* Fundo preto claro */
    color: #fff; /* Texto branco */
    font-family: Arial, sans-serif;
  }
`;

export const AppContainer = styled.div`
  margin: 24px;
  padding: 20px;
  background-color: #444; /* Fundo para o container */
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff; /* Título branco */
  margin-bottom: 20px;
`;