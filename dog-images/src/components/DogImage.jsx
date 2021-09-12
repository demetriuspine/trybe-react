import React, { Component } from 'react'

export default class DogImage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dogObj: undefined,
      breed: undefined,
    }
  }

  fetchDog = async () => {
    this.setState(
      { loading: true },
      async () => {
        const apiRequest = await fetch('https://dog.ceo/api/breeds/image/random');
        const jsonParsing = await apiRequest.json();
        this.setState({
          loading: false,
          dogObj: jsonParsing,
          breed: jsonParsing.message.split('/')[4],
        })
      }
    )
  }

  componentDidMount() {
    this.fetchDog();
  }

  renderDogImage = () => {
    const {breed ,dogObj: {message}} = this.state;
    const formattedBreed = breed.toLowerCase()
    .split('-').map((letter) => letter.charAt(0).toUpperCase() + letter
    .substring(1)).join(' ');
    return(
      <section className="card">
        <img className="card-img-top" src={ message } alt='dog'/>
        <p>Raça: { formattedBreed }</p>
        <button className="btn btn-success" type="button" onClick= { this.fetchDog } >Carregar outro cachorro</button>
      </section>
    )    
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <main className="main-container">
        {loading ? loadingElement : this.renderDogImage()}
      </main>
    )
  }
}
