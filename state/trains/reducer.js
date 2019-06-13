import {
  STORE_TRAIN
} from './types'

const INITIAL_STATE = { trains: [] }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORE_TRAIN:
      return { trains: [...state.trains, action.payload] }
    default:
      return state
  }
}
