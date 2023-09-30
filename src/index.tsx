import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { TextAreaContextProvider } from './transferarea/context/text-area-context';
import TransferAreaScreen from './transferarea/TransferAreaScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './home/HomeScreen';
import GlobalStyle from './common/components/GlobalTheme';
import { Theme } from './common/components/Theme';
import Base64EncoderDecoder from './base64/Base64EncoderDecoder';
import { Base64EncoderDecoderContextProvider } from './base64/context/base64-context';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Theme>
      <TextAreaContextProvider>
        <Base64EncoderDecoderContextProvider>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/copy-paste" element={<TransferAreaScreen />} />
            <Route path="/copy-paste/:transferAreaId" element={<TransferAreaScreen />} />
            <Route path="/base64" element={<Base64EncoderDecoder />} />
          </Routes>
        </Base64EncoderDecoderContextProvider>
      </TextAreaContextProvider>
    </Theme>
  </BrowserRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
