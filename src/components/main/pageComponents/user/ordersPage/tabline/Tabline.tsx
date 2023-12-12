import React, { useCallback, useRef } from "react";
import TablineItem from "./TablineItem";
import { v4 as uuidv4 } from "uuid";

const data = [
  "Chờ xác nhận",
  "Đã xác nhận",
  "Đang gửi",
  "Đã nhận",
  "Đã huỷ",
  "Đổi hàng",
];

type Props = {
  changeCase: (typecase: string) => void;
};

const Tabline = ({ changeCase }: Props) => {

  return (
    <>
      <ul className="items-center gap-2 hidden sm:flex justify-center">
        {data.map((item) => (
          <TablineItem label={item} changeCase={changeCase} key={uuidv4()} />
        ))}
      </ul>
      
      <select onChange={(e) => changeCase(e.target.value)} className="focus:outline-none flex w-full sm:hidden bg-zinc-100 py-2 px-3 rounded">
        {data.map((item) => (
          <option value={item} key={uuidv4()}>{item}</option>
        ))}
      </select>
    </>
  );
};

export default Tabline;
