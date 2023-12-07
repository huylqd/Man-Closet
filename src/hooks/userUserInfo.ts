import { getAddressByUserIdState } from "@/redux/reducer/user.reducer"
import { useAppDispatch, useAppSelector } from "@/redux/store"
import { TAddress } from "@/services/address.services"
import { useEffect, useMemo } from "react"

type TUserInfo = {
  _id: string,
  isBlocked: boolean,
  name: string,
  email: string,
  role: string,
  address: TAddress[],
  updatedAt: Date
}

const useUserInfo = () => {
  const userAddress = useAppSelector((state) => state.user.address)
  const user : TUserInfo = JSON.parse(localStorage.getItem("user") as string)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAddressByUserIdState(user?._id as string))
  }, [dispatch, user?._id])

  const result = {
    ...user,
    address: userAddress
  }

  return result
}

export default useUserInfo