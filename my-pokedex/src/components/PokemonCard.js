import React, { Component } from 'react'

export default class PokemonCard extends Component {
  render() {
    const { pokemon: { name, type, image, moreInfo } } = this.props
    return (
      <section className="pokemon-card col-md-3 col-sm-6 mb-5">
        <div className="card">
          <img className="card-img-top" src={ image } alt={`Imagem do pokemon ${name}`} />
          <div className="card-body">
            <h6 className="card-title">{ name }</h6>
            <p className="card-text">Type: { type }</p>
            <a 
              href={ moreInfo }
              target="_blank"
              rel="noreferrer"
              class="btn btn-primary">
              More Info
            </a>
          </div>
        </div>
      </section>
    )
  }
}
