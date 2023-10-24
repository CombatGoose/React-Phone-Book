import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const contactsStore = [
  { 
    id: 1, 
    name: "John",
    phone: "380000000000"
  }
]

const reRender = (contactsStore) => { 
  root.render(
      <App reRender = {reRender} contactsStore={contactsStore}/>
  );
}

reRender(contactsStore)

reportWebVitals();
