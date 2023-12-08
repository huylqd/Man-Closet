"use client";

import { GridView } from "@/components/dataViews";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import StatisticsCardItem from "./StatisticsCardItem";
import { useCurrency, usePercentage } from "@/hooks";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  getAllOrderBillState,
  getCountBillState,
  getDoanhThuState,
} from "@/redux/reducer/order.reducer";
import { getCountUserState } from "@/redux/reducer/user.reducer";
import { User } from "@/interfaces/user.interface";

const StatisticsCard = () => {
  const ordersState = useAppSelector((state) => state.order.orders);
  const countBillState = useAppSelector((state) => state.order.countBill);
  const usersState = useAppSelector((state) => state.user.countUser);
  const doanhThuState = useAppSelector((state) => state.order.doanhthu);

  const [orders, setOrders] = useState(0);
  const [users, setUsers] = useState(0);
  const [countBill, setCountBill] = useState(0);
  const [doanhthu, setDoanhThu] = useState(0);
  const dispatchThunk = useAppDispatch();

  useEffect(() => {
    dispatchThunk(getAllOrderBillState());
    dispatchThunk(getCountUserState());
    dispatchThunk(getCountBillState());
    dispatchThunk(getDoanhThuState());
  }, [dispatchThunk]);

  useEffect(() => {
    setOrders(ordersState?.length);
    setUsers(usersState);
    setCountBill(countBillState);
    setDoanhThu(doanhThuState);
  }, [ordersState, usersState, countBillState, doanhThuState]);

  const statisticsData2 = [
    {
      title: "Số lượng đơn hàng đã bán trong tháng",
      data: {
        complete: countBill,
        kpi: 10,
        percentage: usePercentage(countBill, 10),
      },
    },
    {
      title: "Khách hàng mới trong tháng",
      data: {
        complete: users,
        kpi: 50,
        percentage: usePercentage(users, 50),
      },
    },
    {
      title: "Doanh thu trong tháng",
      data: {
        complete: useCurrency(doanhthu),
        kpi: useCurrency(2000000),
        percentage: usePercentage(doanhthu, 2000000),
      },
    },
  ];

  return (
    <>
      <GridView className="gap-y-6" marginLeft="30px" wrap previews={3}>
        {statisticsData2.map((item) => (
          <StatisticsCardItem
            key={uuidv4()}
            title={item.title}
            complete={item.data.complete}
            kpi={item.data.kpi}
            percentage={item.data.percentage}
            marginLeft="30px"
          />
        ))}
      </GridView>
    </>
  );
};

export default StatisticsCard;
