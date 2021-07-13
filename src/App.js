import styled from 'styled-components';
import TennisSimulator from './Components/TennisSimulator';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const TitleWrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

const App = () => {
  return (
    <div>
      <TitleWrapper>
        <Title>Single Set Tennis Score Simulator</Title>
      </TitleWrapper>
      <TennisSimulator />
    </div>
  );
}

export default App;
