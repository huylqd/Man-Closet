"use client";
import React from "react";
import { StatisticsCard, StatisticsChart, StatisticsTable } from "@/components/admin/dashboard";

const Dashboard = () => {
  return (
    <div>
      <section className="section_container py-4">
        <StatisticsCard />
      </section>

      <section className="section_container py-4">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-[1] lg:flex-[3]">
            <StatisticsTable />
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
