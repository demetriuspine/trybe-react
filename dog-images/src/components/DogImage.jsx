import React, { Component } from 'react'

export default class DogImage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dogObj: undefined,
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
        })
      }
    )
  }

  componentDidMount() {
    this.fetchDog();
  }

  renderDogImage = () => {
    return(
      <section>
        <img src={ this.state.dogObj.message } alt='dog'/>
        <button type="button" onClick= { this.fetchDog } >Carregar outro cachorro</button>
      </section>
    )    
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <main>
        {loading ? loadingElement : this.renderDogImage()}
      </main>
    )
  }
}
