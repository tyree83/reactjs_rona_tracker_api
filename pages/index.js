  
import { createGlobalStyle } from 'styled-components';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* border: 5px solid greenyellow; */
    background-color: #EFEFEE;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    text-align: center;
      h1 {color: #EFEFEE;}
      h2 {color: #0FADB2}
      h4 {color: #0FADB2}
  }
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      <h2>Global Coronavirus Stats</h2>
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
    </div>
  );
}