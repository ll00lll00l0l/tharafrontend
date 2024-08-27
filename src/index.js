import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter} from "react-router-dom"
import ScrollToTop from './elements/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
 <ScrollToTop />
    <App />
  </HashRouter>
);

