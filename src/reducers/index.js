import { combineReducers } from 'redux'
import pizzaBase from './pizzaBase'
import pizzaSauce from './pizzaSauce'
import pizzaToppings from './pizzaToppings'
import selectBase from './selectBase'



export default combineReducers({

 pizzaBase, pizzaSauce, pizzaToppings, selectBase
})
