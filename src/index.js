import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import { AuthService } from './services/auth';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthService> */}
        <App />
      {/* </AuthService> */}
    </BrowserRouter>
  </React.StrictMode>
);
