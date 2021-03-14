import {
  notifyConstants
} from '../constants'
import {
  defAction
} from '../../helpers/defAction'

export const notifyActions = {
  addMessage,
  addTimeOut,
  fetchedDog
}

function fetchedDog() {
  console.log('action')
  return (dispatch) =>
    dispatch({
      type: 'FETCHED_DOG',
    })
}

function addMessage() {
  return (dispatch) =>
    dispatch({
      type: notifyConstants.ADD_MESSAGE,
    })
}

function addTimeOut() {
  return (dispatch) =>
    dispatch({
      type: notifyConstants.ADD_TIMEOUT
    })
}