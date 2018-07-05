import { SELECT_SAUCE } from "../actions/sauce";
import { DESELECT_SAUCE } from "../actions/sauce";

export default function(state = [], action = {}) {
  switch (action.type) {
    case SELECT_SAUCE:
      return [...state,
        action.payload.id];
        case DESELECT_SAUCE:
        return state.filter(item => item !== action.payload.id)
    default:
      return state;
  }
}
