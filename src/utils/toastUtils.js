// import { Notify } from 'quasar'
import { Toast } from '@capacitor/toast'

export const usingToast = (type, msg) => {
  /* return Notify.create({
    message: msg,
    color: type === 'success' ? 'green' : 'red',
    position: 'top',
    classes: 'custom-toast'
  }) */

  return Toast.show({
    text: msg
  })
}
