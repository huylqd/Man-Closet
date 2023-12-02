"use client";

import { GridView } from "@/components/dataViews";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import StatisticsCardItem from "./StatisticsCardItem";
import { useCurrency, usePercentage } from "@/hooks";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getAllOrderBillState } from "@/redux/reducer/order.reducer";
import { getAllUserState } from "@/redux/reducer/user.reducer";
import { User } from "@/interfaces/user.interface";

const StatisticsCard = () => {
  const ordersState = useAppSelector((state) => state.order.orders);
  const usersState = useAppSelector((state) => state.user.users)

  const [orders, setOrders] = useState(0);
  const [users, setUsers] = useState(0)

  const dispatchThunk = useAppDispatch();

  useEffect(() => {
    dispatchThunk(getAllOrderBillState());
    dispatchThunk(getAllUserState());
  }, [dispatchThunk]);

  useEffect(() => {
    setOrders(ordersState.length);
    setUsers(usersState.length)
  }, [ordersState, usersState]);


  const statisticsData2 = [
    {
      title: "Sản phẩm đã bán",
      data: {
        complete: 10,
        kpi: 100,
        percentage: usePercentage(10, 100)
      }
    },
    {
      title: "Số lượng đơn hàng",
      data: {
        complete: orders,
        kpi: 10,
        percentage: usePercentage(orders, 10)
      }
    },
    {
      title: "Khách hàng mới",
      data: {
        complete: users,
        kpi: 150,
        percentage: usePercentage(100, 90)
      }
    },
    {
      title: "Doanh thu",
      data: {
        complete: useCurrency(100000),
        kpi: useCurrency(200000),
        percentage: usePercentage(100000, 200000)
      }
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
