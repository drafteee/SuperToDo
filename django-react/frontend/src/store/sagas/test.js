import {
  takeEvery
} from 'redux-saga/effects'

function hello() {
  try {
    console.log('request')
  } catch (error) {
    console.log('error')
  }
}


export function* helloSaga() {
  yield takeEvery('FETCHED_DOG', hello)
}