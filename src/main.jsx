import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';

import App from './App.jsx'

import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import StoreProvider from './redux/store/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer/>
    <StoreProvider>
    <App />
    </StoreProvider>
  </React.StrictMode>,
)
