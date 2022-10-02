import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const showToastMessage = text => {
  toast.success(text, {
    position: toast.POSITION.TOP_RIGHT
  })
}
