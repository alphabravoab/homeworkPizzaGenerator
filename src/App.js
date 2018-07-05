import React, { Component } from 'react';
import './App.css';

import store from './store'
import { Provider } from 'react-redux'
import PizzaBase  from './components/PizzaBase'
import PizzaSauce  from './components/PizzaSauce'
import PizzaToppings  from './components/PizzaToppings'
import PizzaTotalPrice  from './components/PizzaTotalPrice'
import ResultPage  from './components/ResultPage'
import FastDelivery  from './components/FastDelivery'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <h1>Welcome to your personal Pizza Generator!</h1>

          <PizzaBase /><br />
          <PizzaSauce /><br />
          <PizzaToppings /><br /><br />
          <FastDelivery />

          <PizzaTotalPrice /><br /><br />

          <ResultPage />
        </div>

      </Provider>
    );
  }
}

export default App;
