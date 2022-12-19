/* eslint-disable camelcase */
import axios from 'axios'
import { login_api, questionnaires_api } from '../const/api'
import { apiBaseUrl } from '../const/config'
import Cookies from 'js-cookie'

/* const objectToFormData = (obj) => {
  const formData = new FormData()
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') {
      const items = obj[key]
      for (let i = 0; i < items.length; i++) {
        formData.append(`${key}[${i}]`, items[i])
      }
    } else {
      formData.append(key, obj[key])
    }
  })
  return formData
} */

// Service for authentication (Login/Registration )
// Login API Logic.
export const loginHanadler = async ({ email, password }) => {
  const response = await axios.post(
    `${apiBaseUrl}/${login_api}`,
    { email, password },
    { headers: { Accept: 'application/json' } }
  )
  console.log('loginHanadler login token:', response.data.data.token)
  return response.data.data
}

export const RegisterHandler = async (form, nextStep) => {
  const response = await axios.post(
    `${apiBaseUrl}/register`,
    form,
    { headers: { Accept: 'application/json' } }
  )

  if (response.status === 200) {
    Cookies.set('token', response.data.data.token)
    window.location.href = nextStep
  }

  return response
}

export const OTPHandler = async (code) => {
  // console.log(code);
  const token = Cookies.get('token')
  const response = await axios.post(
    `${apiBaseUrl}/mobile/verify`,
    { code },
    {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      }
    }
  )

  if (response.status === 200) {
    Cookies.set('token', response.token)
    window.location.href = '/questionnaire'
  }

  return response
}

export const OTPResendCode = async () => {
  const token = Cookies.get('token')
  const response = await axios.get(
    `${apiBaseUrl}/mobile/resend`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token
      }
    }
  )

  if (response.status === 200) {
    Cookies.set('token', response.token)
  }

  return response
}

// Example for authenticate API calling
export const questionnairesHandle = async (body) => {
  const token = Cookies.get('token') // Used for accesing cookies
  const response = await axios.post(
    `${apiBaseUrl}/${questionnaires_api}`,
    body,
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  )
  return response
}
