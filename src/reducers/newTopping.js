import { SELECT_TOPPING } from "../actions/topping";
import { DESELECT_TOPPING } from "../actions/topping";

export default function(state = [], action = {}) {
  switch (action.type) {
    case SELECT_TOPPING:
      return [...state, action.payload.id];
    case DESELECT_TOPPING:

      return state.filter(item => item !== action.payload.id)
    default:
      return state;
  }
}
