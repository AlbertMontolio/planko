import {
  STORE_TRAIN, 
  DELETE_ALL_TRAINS,
  DELETE_TRAIN
} from './types'

const INITIAL_STATE = { trains: [] }

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORE_TRAIN:
      return { trains: [...state.trains, action.payload] }
    case DELETE_ALL_TRAINS:
      return { trains: [] }
    case DELETE_TRAIN:
      // find position of id
      const idIndex = state.trains.findIndex(train => train.id === action.payload);
      console.log('payload id', action.payload)
      console.log('idIndex', idIndex)
      return {
        trains: [
          ...state.trains.slice(0, idIndex),
          ...state.trains.slice(idIndex + 1)
      ]}
    default:
      return state
  }
}
