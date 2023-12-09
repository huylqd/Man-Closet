import { Button } from "@/components/ui/button";
import { setBillAddress } from "@/redux/reducer/bill.reducer";
import { useAppDispatch } from "@/redux/store";
import { TAddress } from "@/services/address.services";
import { ArrowLeft, Plus } from "lucide-react";
import React from "react";
import { v4 as uuidv4 } from "uuid";


const ListItem = ({
  address,
  onClose,
  addressIdSelected,
}: {
  address: TAddress;
  onClose: () => void;
  addressIdSelected: string;
}) => {
  const dispatch = useAppDispatch()

  const handleSelect = () => {
    dispatch(setBillAddress(address))
    onClose();
  };

  return (
    <li
      onClick={() => handleSelect()}
      className="flex items-center gap-3 p-2 bg-transparent hover:bg-zinc-800 text-gray-800 group hover:text-white cursor-pointer transition-all rounded border-b"
    >
      <label
        className={
          "flex items-center justify-center w-[16px] h-[16px] bg-transparent rounded-full border " +
          `${
            address?._id === addressIdSelected
              ? "border-[--secondary-color]"
              : "border-zinc-300"
          }`
        }
      >
        <span
          className={
            "block w-[8px] h-[8px] rounded-full " +
            `${
              address?._id === addressIdSelected
                ? "bg-[--secondary-color]"
                : "bg-zinc-300"
            }`
          }
        ></span>
      </label>
      <p className="flex-[1] text-gray-800 group-hover:text-white transition-colors">
        {address?.detailAddress ? `${address?.detailAddress}, ` : ""}
        {address?.wards ? `${address.wards}, ` : ""}
        {address?.district ? `${address.district}, ` : ""}
        {address?.city ? `${address.city}` : ""}
      </p>
    </li>
  );
};

type Props = {
  addressList: TAddress[];
  onClose: () => void;
  addressIdSelected: string;
};

const SwitchModal = ({
  addressList,
  onClose,
  addressIdSelected,
}: Props) => {
  return (
    <>
      <div className="bg-white w-[500px] p-6 rounded">
        <div className="flex items-center justify-between pb-3 gap-2">
          <h4>Danh sách địa chỉ</h4>
          <Button variant={"primary"}>
            <Plus className="w-4 h-4" />
            <span className="hidden md:inline-block">Tạo mới</span>
          </Button>
        </div>

        <div className="bg-zinc-100 rounded">
          <ul className="min-h-[300px] overflow-y-auto p-2">
            {addressList.map((item) => (
              <ListItem
                address={item}
                key={uuidv4()}
                onClose={onClose}
                addressIdSelected={addressIdSelected}
              />
            ))}
          </ul>
        </div>

        <div className="pt-6">
          <button onClick={() => onClose()} className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5"/>
            <span>Quay lại</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SwitchModal;
