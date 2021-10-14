import React, { Component } from 'react';
import { connect } from 'react-redux';
import addClick from '../redux/actions';

export class ButtonClicks extends Component {
  render() {
    const { add } = this.props
    return (
      <div>
        <button onClick={ add }>
          Clique aqui
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addClick())
})

export default connect(null, mapDispatchToProps)(ButtonClicks)
