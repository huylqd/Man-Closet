"use client";

import React from "react";
import style from "./statisticsCardItem.module.scss";
import { cn } from "@/lib/utils";

interface StatisticsCardItemProps {
  cartData: {
    title: string;
    data: number;
  };
  marginLeft: string;
  color: string;
}
const StatisticsCardItem = ({
  cartData,
  marginLeft = "0px",
  color,
}: StatisticsCardItemProps) => {
  const { title, data } = cartData;
  const dynamicStyle = {
    "--ml": marginLeft,
    "--color": color,
  } as React.CSSProperties;
  return (
    <>
      <div
        className={cn(
          style.statistics_card_item,
          "bg-white dark:bg-zinc-900 flex p-6 items-center gap-5 rounded"
        )}
        style={dynamicStyle}
      >
        <div>
          <div className={cn(style.chart, "relative w-[80px] h-[80px]")}>
            <svg className="relative w-[80px] h-[80px]">
              <circle
                cx="35"
                cy="35"
                r={"35"}
                className="w-[80px] h-[80px] fill-none"
              ></circle>
              <circle
                cx="35"
                cy="35"
                r={"35"}
                className="w-[80px] h-[80px] fill-none"
              ></circle>
            </svg>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-gray-700">
              <span className="text-xl">
                87<span className="text-sm">%</span>
              </span>
            </div>
          </div>
        </div>
        <div className="grow flex flex-col items-center gap-3">
          <h4 className="text-md flex-1">{title}</h4>
          <h2 className="text-xl font-medium">{data}</h2>
        </div>
      </div>
    </>
  );
};

export default StatisticsCardItem;
