import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Calendar from './components/Calendar/Calendar';
import Squarefoot from './components/Squarefoot/Squarefoot';

import 'milligram/dist/milligram.css';
import './App.css';

import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './Client';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className='App'>
        <Navbar />
        <Squarefoot />
        <Calendar />
      </div>
    </ApolloProvider>
  );
}

export default App;
