import {
  STORE_TRAIN, DELETE_ALL_TRAINS
} from './types'

const INITIAL_STATE = { trains: [
  {
    id: 1,
    start: 1563099031722,
    time: 654
  },
  {
    id: 2,
    start: 236326363,
    time: 354
  }
] }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORE_TRAIN:
      return { trains: [...state.trains, action.payload] }
    case DELETE_ALL_TRAINS:
      return { trains: [] }
    default:
      return state
  }
}
