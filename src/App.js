import React, { Component } from 'react';
import './App.css';

import store from './store'
import { Provider } from 'react-redux'
import PizzaBase  from './components/PizzaBase'
import PizzaSauce  from './components/PizzaSauce'
import PizzaToppings  from './components/PizzaToppings'
import PizzaTotalPrice  from './components/PizzaTotalPrice'
import ResultPage  from './components/ResultPage'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <h1>Welcome to your personal Pizza Generator!</h1>

          <PizzaBase />
          <PizzaSauce />
          <PizzaToppings />

          <PizzaTotalPrice /><br /><br /><br /><br />


          <ResultPage />
        </div>

      </Provider>
    );
  }
}

export default App;
