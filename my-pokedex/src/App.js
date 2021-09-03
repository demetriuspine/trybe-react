import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import PokemonCard from './components/PokemonCard';
import database from './database';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          
        </main>
      </div>
    );
  }
}

export default App;
