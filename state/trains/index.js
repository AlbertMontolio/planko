// import * as actions from './actions'

// export { actions }

import {
  STORE_TRAIN
} from './types'

export const storeTrain = (payload) => {
  return {
    payload: payload,
    type: STORE_TRAIN
  }
}