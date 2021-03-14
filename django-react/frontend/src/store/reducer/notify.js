import {
  notifyConstants
} from '../constants/'

const initialState = {
  errors: null,
  isEmpty: false,
  messages: [1, 2],
  timeouts: [1],
  reminders: null
}

export default function (state = initialState, action) {
  //login;
  switch (action.type) {
    case notifyConstants.ADD_MESSAGE: {
      return {
        ...state,
      }
    }
    case notifyConstants.ADD_TIMEOUT: {
      return {
        ...state,
      }
    }
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
