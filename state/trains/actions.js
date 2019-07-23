import {
  STORE_TRAIN,
  DELETE_ALL_TRAINS,
  DELETE_TRAIN,
  ADD_TRAIN,
  SEND_TRAINS
} from './types'

export const sendTrains = (auth, trains) => async dispatch => {
  console.log('sendTrainssssss')
  console.log('auth', auth)
  const bodyRequest = {
    'user_id': auth.id,
    trains: trains
  }

  console.log('bodyRequestttt', bodyRequest)
  console.log('bodyRequest stringify', JSON.stringify(bodyRequest))

  const rawResponse = await fetch('https://plankorailsfour.herokuapp.com/api/v1/import', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'access-token': auth.accessToken,
      'token-type': 'Bearer',
      'client': auth.client,
      'uid': auth.uid,
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

export const deleteAllTrains = payload => {
  return {
    type: DELETE_ALL_TRAINS,
    payload: payload
  }
}

export const addTrain = payload => {
  return {
    type: ADD_TRAIN,
    payload: payload
  }
}
