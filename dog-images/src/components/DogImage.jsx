import React, { Component } from 'react'

export default class DogImage extends Component {
  constructor() {
    super();
    this.state = {
      dogObj: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_9518.jpg',
    }
  }
  render() {
    const { dogObj } = this.state;
    return (
      <section>
        <img src={ dogObj } alt='dog'/>
      </section>
    )
  }
}
