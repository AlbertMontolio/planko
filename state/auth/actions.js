import {
  RAILS_LOGIN_SUCCESS,
  RAILS_LOGOUT
} from './types'

export const railsLogout = (auth) => async dispatch => {
  console.log('railsLogout action')
  console.log('auth', auth)
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

  console.log('headers', headers)
  console.log('data', data)

  dispatch({
    type: RAILS_LOGOUT,
    payload: 'something'
  })
}

export const railsLogin = (email, password) => async dispatch => {

  // let authToken = await AsyncStorage.getItem('auth_token')

  const authToken = null

  if (authToken) {
    dispatch({
      type: RAILS_LOGIN_SUCCESS,
      payload: authToken
    })
  } else {
    handleRailsLogin(dispatch, email, password)
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
  const data = await rawResponse.json()

  const payload = {
    accessToken: headers.map['access-token'],
    client: headers.map['client'],
    id: data.data.id,
    email: data.data.email
  }
  
  dispatch({
    type: RAILS_LOGIN_SUCCESS,
    payload: payload
  })
}
