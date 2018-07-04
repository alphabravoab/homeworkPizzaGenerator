import { combineReducers } from 'redux'
import pizzaBase from './pizzaBase'
import pizzaSauce from './pizzaSauce'
import pizzaToppings from './pizzaToppings'
import newBase from './newBase'



export default combineReducers({

 pizzaBase, pizzaSauce, pizzaToppings, newBase
})
