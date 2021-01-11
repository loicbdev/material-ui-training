// source : https://www.youtube.com/watch?v=D3tB_DGgICE&feature=youtu.be
import Navigation from './components/Navigation';
import Signin from './components/SignIn';
import React, { Component } from 'react';
import styled from 'styled-components';
// ou import Button from '@material-ui/core/Button';
import { Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';


const DIV = styled.div `
display: flex;
flex-direction: column;
align-items: center;
padding: 5rem;
`;

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  },
  typography: {
    fontSize: 20,
    fontFamily : "Roboto, sans serif"
  },
  overrides: {
    MuiButton: {
      root:{
      backgroundColor: "red",
      "&:hover": { backgroundColor: "yellow" }
      }
    }
  }
  })

const styles = {
  myLeftButton: {
    backgroundColor: "blue",
    margin: "1rem"
  },
  myRightButton: {
    backgroundColor: "orange",
    margin: "1rem"
  }
}  

class App extends Component {
  render() {
    return ( 
      <MuiThemeProvider theme={ theme }>
        <DIV className = "App">
          <Navigation />
          <Signin />
          <Button className={this.props.classes.myLeftButton}>Coucou</Button>
          <Button color="secondary">les gens !</Button>
        </DIV>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);