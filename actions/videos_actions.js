import {
  SELECT_VIDEO
} from './types'

export const selectVideo = (videoId) => {
  return {
    payload: videoId,
    type: SELECT_VIDEO
  }
}