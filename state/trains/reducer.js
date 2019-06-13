import {
  STORE_TRAIN
} from './types'

const INITIAL_STATE = { trains: [] }

export default function(state = INITIAL_STATE, action) {
  console.log(action.payload)
  console.log('action.type', action.type)
  switch (action.type) {
    case STORE_TRAIN:
      console.log('action.payload', action.payload)
      console.log('state', state)    
      return { trains: [...state.trains, action.payload] }
    default:
      return state
  }
}
