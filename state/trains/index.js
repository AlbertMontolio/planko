// import * as actions from './actions'

// export { actions }

import {
  STORE_TRAIN,
  DELETE_ALL_TRAINS
} from './types'

export const storeTrain = (payload) => {
  return {
    payload: payload,
    type: STORE_TRAIN
  }
}

export const deleteAllTrains = () => {
  return {
    type: DELETE_ALL_TRAINS
  }
}