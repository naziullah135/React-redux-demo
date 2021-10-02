import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksContainer from './components/HooksContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
   <Provider store={store}>
      <div className="App">
        <HooksContainer />
        <CakeContainer />
        <IceCreamContainer />
    </div>
   </Provider>
  );
}

export default App;
