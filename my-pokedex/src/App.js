import React, { Component } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
          <Dashboard />
        </main>
      </div>
    );
  }
}

export default App;
