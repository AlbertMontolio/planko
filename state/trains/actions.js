import {
  STORE_TRAIN
} from './types'

export const storeTrain = (payload) => {
  return {
    payload: payload,
    type: STORE_TRAIN
  }
}

export const deleteAllTrains = () => {
  console.log('actions delete all trains')
  return {
    type: DELETE_ALL_TRAINS
  }
}