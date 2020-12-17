// source : https://www.youtube.com/watch?v=D3tB_DGgICE&feature=youtu.be

import React, { Component } from 'react';
import styled from 'styled-components';
// ou import Button from '@material-ui/core/Button';
import { Button } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';


const DIV = styled.div `
display: flex;
flex-direction: column;
align-items: center;
padding: 5rem;
`;

const styles = {
  myLeftButton: {
    backgroundColor: "blue",
  }
}

const theme = createMuiTheme({
  palette: {
    primary: blue
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

class App extends Component {
  render() {
    return ( 
      <MuiThemeProvider theme={ theme }>
        <DIV className = "App">
          <Button className={this.props.classes.myLeftButton}>Coucou</Button>
          <Button>les gens !</Button>
        </DIV>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);