import { SELECT_BASE } from "../actions/base";

export default function(state = [], action = {}) {
  switch (action.type) {
    case SELECT_BASE:
      return [...state,
        action.payload.name, 
        action.payload.price];
    default:
      return state;
  }
}
