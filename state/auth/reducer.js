import {
  RAILS_LOGIN_SUCCESS
} from './types'

const INITIAL_STATE = {}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RAILS_LOGIN_SUCCESS:
      console.log('ueeee', action.payload)
      return action.payload
    default:
      return state
  }
}