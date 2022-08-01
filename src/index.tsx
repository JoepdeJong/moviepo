import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

// Generate a hex with a length of 16
const getRandomHex = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
}

console.log(getRandomHex());

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://graphql.pdm-gateway.com/graphql',
    fetchOptions: {
      mode: 'cors'
    }
  }),
  headers: {
    'user-unique-id': getRandomHex(),
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
