import { combineReducers } from 'redux'
import videos from './videos_reducer'

export default combineReducers({
  videos: videos
})