import {
  STORE_TRAIN, 
  DELETE_ALL_TRAINS,
  DELETE_TRAIN,
  ADD_TRAIN
} from './types'

const INITIAL_STATE = { trains: [] }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORE_TRAIN:
      return { trains: [...state.trains, action.payload] }
    case DELETE_ALL_TRAINS:
      return { trains: [] }
    case DELETE_TRAIN:
      const idIndex = state.trains.findIndex(train => train.id === action.payload);
      return {
        trains: [
          ...state.trains.slice(0, idIndex),
          ...state.trains.slice(idIndex + 1)
      ]}
    case ADD_TRAIN:
      return state
    default:
      return state
  }
}
