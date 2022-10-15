import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { getPictures } from 'services/pixabayAPI';

const data = getPictures('cat');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {console.log(data)}
    <App />
  </React.StrictMode>
);
