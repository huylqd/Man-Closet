"use client";

import { GridView } from "@/components/dataViews";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import StatisticsCardItem from "./StatisticsCardItem";
import { useCurrency } from "@/hooks";

const StatisticsCard = () => {
  const statisticsData = [
    {
      title: "Sản phẩm đã bán",
      data: 100,
    },
    {
      title: "Số lượng đơn hàng",
      data: 100,
    },
    {
      title: "Số lượng khách hàng",
      data: 100,
    },
    {
      title: "Doanh số",
      data: useCurrency(100000000),
    },
  ];

  const color = [
    "rgb(52 211 153)",
    "rgb(6 182 212)",
    "rgb(129 140 248)",
    "rgb(251 113 133)"
  ]

  return (
    <>
      <GridView className="gap-y-6" marginLeft="30px" wrap previews={3}>
        {statisticsData.map((item : any, index:number) => (
          <StatisticsCardItem key={uuidv4()} cartData={item} color={`${color[index]}`} marginLeft="30px"/>
        ))}
      </GridView>
    </>
  );
};

export default StatisticsCard;
