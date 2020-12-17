// source : https://www.youtube.com/watch?v=D3tB_DGgICE&feature=youtu.be

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

const styles = {
  myLeftButton: {
    backgroundColor: "blue",
    margin: "1rem"
  },
  myRightButton: {
    backgroundColor: "green",
    margin: "1rem"
  }
}

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

class App extends Component {
  render() {
    return ( 
      <MuiThemeProvider theme={ theme }>
        <DIV className = "App">
          <Button className={this.props.classes.myLeftButton}>Coucou</Button>
          <Button className={this.props.classes.myRightButton}>les gens !</Button>
        </DIV>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);