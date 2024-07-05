"use client";

import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 335,
      type: "area",
      dropShadow: {
        enabled: true,
        color: "#623CEA14",
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [2, 2],
      curve: "straight",
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 8,
      colors: "#fff",
      strokeColors: ["#3056D3", "#80CAEE"],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: "category",
      categories: ["0", "1", "2", "3", "4", "5","6"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
      min: 0,
      max: 5,
      tickAmount: 5,
      labels: {
        formatter: function (value) {
          return value.toFixed(1);
        },
      },
    },
  };
  
  interface ChartOneState {
    series: {
      name: string;
      data: number[];
    }[];
  }
  
  const ChartFour: React.FC = () => {
    const series = [
      {
        name: "Agente 01",
        data: [2, 3, 1, 5, 1,2],
      },
      {
        name: "Agente 02",
        data: [2, 2, 1, 3, 5,2],
      },
      {
        name: "Agente 03",
        data: [1, 2, 4, 5, 1,2],
      },
    ];
  
    return (
    //   <div className="col-span-2 md:col-span-4 rounded-sm border border-stroke bg-white p-3 shadow-default dark:border-strokedark dark:bg-boxdark">
    //   <div className="flex items-center justify-between gap-3">
    //     <div className="flex items-center gap-3">
    //       <span className="h-3 w-3 bg-primary rounded-full"></span>
    //       <div>
    //         <p className="font-semibold text-primary">Pesquisa nos últimos 5 dias</p>
    //         <p className="text-xs font-medium">30.06.2024 - 4.07.2024</p>
    //       </div>
    //     </div>
    //     <div className="flex gap-3">
    //       <button className="px-2 py-1 text-xs font-medium text-black rounded bg-white shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
    //         Dia
    //       </button>
    //       <button className="px-2 py-1 text-xs font-medium text-black rounded bg-white shadow-card hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
    //         Semana
    //       </button>
    //       <button className="px-2 py-1 text-xs font-medium text-black rounded bg-white shadow-card hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
    //         Mês
    //       </button>
    //     </div>
    //   </div>

    //   <div className="mt-3">
    //     <div id="chartOne" className="w-full max-w-full md:max-w-screen-md mx-auto">
    //       <ReactApexChart options={options} series={series} type="area" height={400} />
    //     </div>
    //   </div>
    // </div>

    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
    <div className="mb-4 justify-between gap-4 sm:flex">
      <div>
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Pesquisa nos últimos 5 dias  
        </h4>
      </div>
      <div>
        <div className="relative z-20 inline-block">
          <select
            name="#"
            id="#"
            className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
          >
            <option value="" className="dark:bg-boxdark">
              Essa Semana 
            </option>
            <option value="" className="dark:bg-boxdark">
              Semana Passada
            </option>
          </select>
          <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                fill="#637381"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                fill="#637381"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>

    
    <div className="mt-3">
          <div id="chartOne" className="-mb-9 -ml-5">
            <ReactApexChart options={options} series={series} type="area" height={350}  width={"100%"} />
          </div>
    </div>
   
  </div>

    

    
    
    );
  };

export default ChartFour;
