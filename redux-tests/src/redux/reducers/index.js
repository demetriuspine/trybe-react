const Initial_State = {
  counter: 0,
}

const clickReducer = (state = Initial_State, { type }) => {
  switch (type) {

  case 'ADD_CLICK':
    return { ...state, counter: state.counter + 1 }

  default:
    return state
  }
}

export default clickReducer;