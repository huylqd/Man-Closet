import { IBill } from "@/interfaces/bill";
import instance from "../instance";



export const getBillByUser = (id_user:string,page:number) => {
    // console.log(id_user);
    const response = instance.get<IBill>(`/order/${id_user}?_page=${page}`)
    return response
}
