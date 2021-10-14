import React from 'react';
import { Provider } from 'react-redux';
import ButtonClicks from './components/ButtonClicks';
import NumberClicks from './components/NumberClicks';

import store from './redux/store';

function App() {
  return (
    <div>
      <Provider store={ store }>
        <ButtonClicks />
        <NumberClicks />
      </Provider>
    </div>
  );
}

export default App;
