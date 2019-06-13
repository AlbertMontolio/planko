import { combineReducers } from 'redux'
import videos from './videos_reducer'
import trainReducer from '../state/trains/reducer'

export default combineReducers({
  videos: videos,
  trains: trainReducer
})