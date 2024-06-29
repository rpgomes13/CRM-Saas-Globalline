"use client";
import dynamic from "next/dynamic";
//import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Breadcrumb from "../../app/components/Breadcrumbs/Breadcrumb";
import ChartOne from "../../components/Charts/ChartOne";
import ChartTwo from "../../components/Charts/ChartTwo";
import ChartThree from "../../components/Charts/ChartThree";
import React from "react";

// const ChartOne = dynamic(() => import('../../components/Charts/ChartOne'), { ssr: false });
// const ChartTwo = dynamic(() => import('../../components/Charts/ChartTwo'), { ssr: false });
// const ChartThree = dynamic(() => import('../../components/Charts/ChartThree'), { ssr: false });

const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
