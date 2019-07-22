import {
  RAILS_LOGIN_SUCCESS
} from './types'

export const railsLogin = (email, password) => async dispatch => {
  console.log('railslogin action')

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
    access_token: headers.map['access-token'],
    client: headers.map['client'],
    id: data.data.id,
    email: data.data.email
  }
  
  dispatch({
    type: RAILS_LOGIN_SUCCESS,
    payload: payload
  })
}
