import { pizzaBase } from "../lib/pizzaElements";
import { NEW_BASE } from "../actions/base"

export default function (state = [], action) {
  switch (action.type) {
    case 'NEW_BASE':
      return [
        ...state,
        {
          id: action.payload.id,
          size: action.payload.size,
          style: action.payload.style,
          price: action.payload.price,}

      ]
    default:
      return state
  }
}
