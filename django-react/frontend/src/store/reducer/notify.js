import {
  notifyConstants
} from '../constants/'

const initialState = {
  errors: null,
  messages: [1, 2],
  timeouts: [1],
  reminders: [1]
}

export default function (state = initialState, action) {
  //login;
  switch (action.type) {
    case notifyConstants.ERROR: {
      return {
        ...state,
        error: action.payload.data ? action.payload : null
      }
    }
    default:
      return state
  }
}
