import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { myStore } from "./app/store";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store = {myStore} >
      <App/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
