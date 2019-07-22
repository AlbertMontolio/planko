import { combineReducers } from 'redux'
import videos from './videos_reducer'
import trainReducer from '../state/trains/reducer'
import authReducer from '../state/auth/reducer'

export default combineReducers({
  videos: videos,
  trains: trainReducer,
  auth: authReducer
})