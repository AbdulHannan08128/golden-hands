"use client";
import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import CircularProgress from "@mui/material/CircularProgress";
import { PieChart } from "@mui/x-charts/PieChart";
import { ADMIN } from "../../../utils/API";
export const dynamic = "force-dynamic";

const Page = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const response = await ADMIN();
      setData(response?.data);
    }
    getData();
  }, []);

  const appointments = data?.APPOINTMENTS;

  const unRespondedCount = appointments?.filter((appointment) => {
    return appointment?.STATUS === "PENDING";
  })?.length;

  const respondedCount = appointments?.filter((appointment) => {
    return appointment?.STATUS !== "PENDING";
  })?.length;

  async function revalidateData() {
    setData(undefined);
    const response = await ADMIN();
    setData(response?.data);
  }

  return (
    <>
      <div className="">
        {data ? (
          <>
            <button
              className="rounded-3xl border-black bg-green-500 px-5 py-2 text-white active:bg-black active:dark:bg-white active:dark:text-black"
              onClick={revalidateData}
            >
              Revalidate
            </button>
            <Cards data={data} />
            <div className="">

            <div className="mt-20 overflow-x-scroll overflow-y-hidden shadow-xl rounded-3xl w-[500px] h-[300px] dark:bg-slate-400 max-w-[90vw]">
              <PieChart
                series={[
                  {
                    data: [
                      {
                        id: "Unresponded",
                        value: unRespondedCount,
                        label:'Unresponded',
                        color: "red",
                      },
                      {
                        id: "Responded",
                        value: respondedCount,
                        label:'Responded',
                        color: "green",
                      },
                    ],
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: 0,
                    endAngle: 360,
                    cx: 150,
                    cy: 150,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  },
                ]}
                width={400}
                height={400}
                className="overflow-scroll"
                />
            </div>
                </div>
          </>
        ) : (
          <div className="flex h-[100%] w-[100%] items-center justify-center align-middle backdrop-blur-sm">
            <CircularProgress color="inherit" />
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
