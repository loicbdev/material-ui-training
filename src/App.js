import React from 'react';
import styled from 'styled-components';
import SignIn from './components/SignIn.js';
import Navigation from './components/Navigation.js';
import 'fontsource-roboto';

const DIV = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;

function App() {
  
  return (
  <DIV className="App">
  <SignIn />
  </DIV>
  );
}

export default App;
