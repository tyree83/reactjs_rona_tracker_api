import styled from 'styled-components';

export default function Header () {

  const HeaderBlock = styled.div`
  background-color: #1792C3;
  color: #F3FF15;
  text-align: center;
`;

  return(

  <div>
    <HeaderBlock>
      <h1 >Coronavirus Stats</h1>
    </HeaderBlock>
    <h4>Global Stats</h4>
  </div>
  )}