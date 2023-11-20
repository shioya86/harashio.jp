import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {AppBar, Toolbar, Typography} from "@material-ui/core";

const root = ReactDOM.createRoot(document.getElementById('root'));

const styles = {
    header: {
        position: "fixed",
        background: "rgba(255, 255, 255, 0.9)",
        color: "#000",
        maxHeight: "4em"
    },
    footer: {
        paddingTop: 10,
        height: 80,
        background: "black",
        textAlign: "center",
        color: "white",
    }
}

root.render(
    <React.StrictMode>
        <AppBar position="static" style={styles.header}>
            <Toolbar>
                <Typography>Shioya86's Portfolio</Typography>
            </Toolbar>
        </AppBar>
      <App />
      <footer style={styles.footer}> Copyright © harashio.jp </footer>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
