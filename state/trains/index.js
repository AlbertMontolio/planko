// import * as actions from './actions'

// export { actions }

import {
  STORE_TRAIN,
  DELETE_ALL_TRAINS,
  DELETE_TRAIN
} from './types'

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