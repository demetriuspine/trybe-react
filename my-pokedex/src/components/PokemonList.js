import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import database from '../database';

export default class PokemonList extends Component {
  render() {
    return (
      <>
        { database.map((pokemon) => (
          <PokemonCard pokemon= {pokemon} />
        )) }
      </>
    )
  }
}
