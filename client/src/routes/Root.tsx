import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ThemeOptions, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Alert, Box, GlobalStyles, useMediaQuery } from '@mui/material';
import * as color from '@mui/material/colors';

interface Props {}


export default function Root({}: Props) {
  const [errorMsg, setErrorMsg] = useState<string>("")
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const lightTheme: ThemeOptions = {
    palette: {
      // mode: "light",
      primary: color.purple,
      secondary: color.lightBlue,
      background: {
        default: color.purple[50],
        paper: color.purple[50]
      }
    }
  }
  
  const darkTheme: ThemeOptions = {
    palette: {
      mode: "dark",
      primary: color.deepPurple,
      secondary: color.orange,
      background: {
        // paper: purple[900]
      },
      text: {
        primary: color.deepPurple[50],
        secondary: color.deepPurple[200],
        disabled: color.deepPurple[100]
      }
    }
  }
  
  // const theme = useTheme();
  const theme = React.useMemo(
    () => 
      createTheme(prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  );
  
  return (
    <>
      {/* <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}/> */}
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Navbar/>
        <Box height={50}>
        {errorMsg && <Alert severity='error'>{errorMsg}</Alert>}
        </Box>
        <Outlet/>
      </ThemeProvider>
    </>
  )
};
