import React from 'react';
import AreaList from './components/areaList/AreaList';
import { GlobalStyle, AppContainer, Title } from './appStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title>Gestão de Áreas e Processos</Title>
        <AreaList />
      </AppContainer>
    </>
  );
};

export default App;