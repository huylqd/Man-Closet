"use client";
import React, { useEffect, useState } from "react";
import { StatisticsCard, StatisticsChart, StatisticsTable } from "@/components/admin/dashboard";
import { ProductSold } from "@/interfaces/product";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getProductSoldState } from "@/redux/reducer/order.reducer";

const Dashboard = () => {

  const [productSold, setProductSold] = useState<ProductSold[]>([])
  const productSoldState = useAppSelector((state) => state.order.productSold)


  const dispatchThunk = useAppDispatch()

  useEffect(() => {
    dispatchThunk(getProductSoldState())
  }, [dispatchThunk])
  
  useEffect(() => {
    setProductSold(productSoldState)
  }, [productSoldState])
   

  return (
    <div>
      <section className="section_container py-4">
        <StatisticsCard />
      </section>

      <section className="section_container py-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-[1] lg:flex-[3]">
            <StatisticsTable data={productSold}/>
          </div>
          <div className="flex-[1] lg:flex-[1]">
            <StatisticsChart/>
          </div>
        </div>
      </section>  
    </div>
  );
};

export default Dashboard;
