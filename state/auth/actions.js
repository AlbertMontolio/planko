import {
  RAILS_LOGIN_SUCCESS,
  RAILS_LOGOUT
} from './types'

export const railsLogout = (auth) => async dispatch => {
  const rawResponse = await fetch('https://plankorailsfour.herokuapp.com/auth/sign_out', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(auth)
  })
  const headers = await rawResponse.headers
  const data = await rawResponse.json()

  dispatch({
    type: RAILS_LOGOUT,
    payload: 'something'
  })
}

export const railsLogin = (email, password) => async dispatch => {
  console.log('rails login action')
  const authToken = null

  if (authToken) {
    dispatch({
      type: RAILS_LOGIN_SUCCESS,
      payload: authToken
    })
  } else {
    await handleRailsLogin(dispatch, email, password)
  }
}

const handleRailsLogin = async (dispatch, email, password) => {
  const rawResponse = await fetch('https://plankorailsfour.herokuapp.com/auth/sign_in', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email, 
      password: password
    })
  })
  const headers = await rawResponse.headers
  console.log('headers after loginnnn', headers)
  const data = await rawResponse.json()
  console.log('data', data)

  const payload = {
    accessToken: headers.map['access-token'],
    client: headers.map['client'],
    id: data.data.id,
    uid: data.data.uid,
    email: data.data.email
  }
  
  console.log('payload', payload)

  dispatch({
    type: RAILS_LOGIN_SUCCESS,
    payload: payload
  })
}
