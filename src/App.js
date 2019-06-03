import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bitcoin from './Bitcoin';

class App extends Component {
  render() {
  /* Création d'une instance de Bitcoin */  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenue dans <strong>first</strong>,
            notre application React</h1>
        </header>
        <p className="App-intro">
          Pour démarrer, éditez le fichier <code>src/App.js</code> et sauvegardez-le. 
          Le changement sera détecté automatiquement et la page rechargée.
        </p>
        <div className="App-content">
          <p>Cours du Bitcoin en temps réel</p>
          <Bitcoin delai="15000"/>
        </div>
        <div className="App-footer">
          Cours issu de cryptocompare.com
        </div>
      </div>
    );
  }
}

export default App;
