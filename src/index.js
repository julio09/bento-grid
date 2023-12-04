import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { extendTheme } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <App/>
    </ChakraProvider>
  </React.StrictMode>
);


