import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "./global.css"

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors ={
  epjc : {
    blue: '#0075c3',
    darkgreen:'#11663d',
    green: '#00bf63',
    peach: '#ffbd59',
    yellow: '#ffde59'
  }
}

const fonts ={
  body: 'montserrat',
  heading: 'montserrat'
}
const theme = extendTheme({colors, fonts})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
