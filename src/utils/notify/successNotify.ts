import { toast } from "react-toastify"

export const commonSuccessToast = (message:string) => {
  return toast.success(`${message}`)
}