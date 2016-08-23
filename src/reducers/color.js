import { CHANGE_COLOR } from '../constants/ActionTypes'

const initialState = { color: '#ffffff'};

export default function colorState(state = initialState, action) {
  switch(action.type) {
    case CHANGE_COLOR:
      return   { ...state, color: action.payload  };
    break;
    default:
      return state;
  }
}