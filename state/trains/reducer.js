import {
  STORE_TRAIN, 
  DELETE_ALL_TRAINS,
  DELETE_TRAIN,
  ADD_TRAIN,
  EMPTY_ALL_MOBILE_TRAINS
} from './types'

import { getLastKey } from './helpers'

const INITIAL_STATE = { trains: [] }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORE_TRAIN:
      const lastId = getLastKey(state.trains) + 1
      const train = action.payload
      train.id = lastId

      return { trains: [...state.trains, train] }
    case DELETE_ALL_TRAINS:
      const remainingTrains = state.trains.filter((train) => train.userId !== action.payload)

      return { trains: remainingTrains }
    case DELETE_TRAIN:
      const idIndex = state.trains.findIndex(train => train.id === action.payload);
      return {
        trains: [
          ...state.trains.slice(0, idIndex),
          ...state.trains.slice(idIndex + 1)
      ]}
    case EMPTY_ALL_MOBILE_TRAINS:
      console.log('deleting all mobile db trains')
      return { trains: [] }
    case ADD_TRAIN:
      return state
    default:
      return state
  }
}
