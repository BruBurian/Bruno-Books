import Pesquisa from './components/Pesquis';
import Header from './components/Header';
import styled from 'styled-components';
import UltimosLancamentos from './components/UltimosLancamentos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vw;
  background-image: linear-gradient(90deg, #420052 35%, #7c3289);

  li {
  list-style: none;
  }
  `


function App() {
  return (
    <AppContainer>
        <Header/>
        <Pesquisa/>
        <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
