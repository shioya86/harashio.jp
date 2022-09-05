import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const styles = {
  footer: {
    paddingTop: 10,
    paddingRight: 40,
    height: 80,
    background: "black",
    textAlign: "center",
    color: "white",
  }
}

root.render(
  <React.StrictMode>
    <App />
    <footer style={styles.footer}> Copyright © harashio.jp </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
