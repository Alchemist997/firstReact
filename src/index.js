import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Dialogsdata = [
  { id: 997, name: 'Dimon', text: 'Hi bro' },
  { id: 9972, name: 'Dimson', text: 'What\'s up?' },
  { id: 9973, name: 'Dimas', text: 'Nice' }
];

ReactDOM.render(
  <React.StrictMode>
    <App data={Dialogsdata} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
