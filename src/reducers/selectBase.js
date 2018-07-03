import { pizzaBase } from "../lib/pizzaElements";

export default function (state = pizzaBase, action) {
  switch (action.type) {
    case 'SELECT_BASE':
      return [
        ...state,
        {
          id: action.payload.id,
          size: action.payload.size,
          style: action.payload.style,
          price: action.payload.price,
        }
      ]
    default:
      return state
  }
}
