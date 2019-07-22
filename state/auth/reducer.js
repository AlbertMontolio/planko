import {
  RAILS_LOGIN_SUCCESS,
  RAILS_LOGOUT
} from './types'

const INITIAL_STATE = {}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RAILS_LOGIN_SUCCESS:
      return action.payload
    case RAILS_LOGOUT:
      return {}
    default:
      return state
  }
}