import { SELECT_DELIVERY } from "../actions/fastDelivery";
import { DESELECT_DELIVERY } from "../actions/fastDelivery";

export default function(state = [], action = {}) {
  switch (action.type) {
    case SELECT_DELIVERY:
      return [action.payload];
    case DESELECT_DELIVERY:

      return state.filter(item => item !== action.payload)
    default:
      return state;
  }
}
