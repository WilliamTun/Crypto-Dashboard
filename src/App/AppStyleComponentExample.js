import './App.css';
import Welcome from './WelcomeMessage'
import styled, {css} from 'styled-components';

const MyButton = styled.div`
  color: green;
  ${ props => props.primary && css `
    color: palevioletred;
  `}
`

const TomatorButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  return (
    <div>
      <Welcome name={"Crypto-Dashboard"}/>
      <MyButton> hey </MyButton>
      <MyButton primary> hey </MyButton>
      <TomatorButton> hey </TomatorButton>


    </div>
  );
}

export default App;
