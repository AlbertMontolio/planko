import {
  SELECT_VIDEO
} from '../actions/types'

const INITIAL_STATE = {
  videos: [
    {
      id: 1,
      url: 'https://youtu.be/fhmzmh1W_po?controls=0&showinfo=0'
    },
    {
      id: 2,
      url: 'https://youtu.be/m7lh5-kV1FI'
    },
    {
      id: 3,
      url: 'https://youtu.be/9rdth8OkXfk'
    },
    {
      id: 4,
      url: 'https://youtu.be/0_5lJ7OGMB8'
    }
  ],
  selectedVideoId: 1
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_VIDEO:
      return {...state, selectedVideoId: action.payload}
    default:
      return state
  }
}