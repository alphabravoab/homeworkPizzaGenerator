import { combineReducers } from 'redux'
import pizzaSauce from './pizzaSauce'
import pizzaToppings from './pizzaToppings'
import newBase from './newBase'
import newSauce from './newSauce'
import newTopping from './newTopping'



export default combineReducers({

pizzaSauce, pizzaToppings, newBase, newSauce, newTopping
})
