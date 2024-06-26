import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './rotas/Home';
import Favoritos from './rotas/Favoritos';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  code{
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  li{
    list-styke: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/favoritos' element={<Favoritos/>} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
