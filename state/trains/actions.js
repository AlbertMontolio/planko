import {
  STORE_TRAIN,
  DELETE_ALL_TRAINS,
  DELETE_TRAIN,
  ADD_TRAIN,
  SEND_TRAINS
} from './types'

export const sendTrains = (auth) => async dispatch => {
  console.log('sendTrainssssss')
  console.log('auth', auth)
  const bodyRequest = {
    'uid': '1',
    'Access-Token': auth.accessToken
  }
  //jqXHRt
  const rawResponse = await fetch('https://plankorailsfour.herokuapp.com/api/v1/import', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'access-token': auth.accessToken,
      'token-type': 'Bearer',
      'client': auth.client,
      'uid': auth.id,
      'expiry': auth.expiry,
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify(bodyRequest)
  })
  const headers = await rawResponse.headers
  const data = await rawResponse.json()

  console.log('headerss', headers)
  console.log('data', data)

  return {
    type: SEND_TRAINS,
    payload: uid
  }
}

export const storeTrain = (payload) => {
  return {
    payload: payload,
    type: STORE_TRAIN
  }
}

export const deleteTrain = payload => {
  return {
    payload: payload,
    type: DELETE_TRAIN
  }
}

export const deleteAllTrains = () => {
  return {
    type: DELETE_ALL_TRAINS
  }
}

export const addTrain = payload => {
  return {
    type: ADD_TRAIN,
    payload: payload
  }
}
