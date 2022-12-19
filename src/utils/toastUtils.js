import { Notify } from 'quasar'

export const usingToast = (type, msg) => {
  return Notify.create({
    message: msg,
    color: type === 'success' ? 'green' : 'red',
    position: 'top',
    classes: 'custom-toast'
  })
}
