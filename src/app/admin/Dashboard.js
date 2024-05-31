"use client";
import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import CircularProgress from "@mui/material/CircularProgress";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { ADMIN } from "../../../utils/API";
import RefreshIcon from '@mui/icons-material/Refresh';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import Link from "next/link";
import MessageIcon from '@mui/icons-material/Message';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import Table from './Table';

const Dashboard = () => {
  const [data, setData] = useState();
  const [accepted, setAccepted] = useState(0);
  const [dismissed, setDismissed] = useState(0);
  const [unRespondedCount, setUnresponded] = useState(0);
  const [rescheduled, setRescheduled] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await ADMIN();
      setData(response?.data);
    }
    getData();
  }, []);

  async function revalidateData() {
    setData(undefined);
    const response = await ADMIN();
    setData(response?.data);
  }

  useEffect(() => {
    if (data?.APPOINTMENTS) {
      const appointments = data.APPOINTMENTS;
      setUnresponded(appointments.filter(appointment => appointment?.STATUS === "PENDING").length);
      setDismissed(appointments.filter(appointment => appointment?.STATUS === 'DISMISSED').length);
      setAccepted(appointments.filter(appointment => appointment?.STATUS === 'ACCEPTED').length);
      setRescheduled(appointments.filter(appointment => appointment?.STATUS === 'RESCHEDULED').length);
    }
  }, [data]);

  const getUpcomingAppointments = () => {
    const today = new Date();
    const upcomingAppointments = Array(7).fill(0).map((_, i) => {
      const targetDate = new Date(today);
      targetDate.setDate(today.getDate() + i);
      const targetDateString = targetDate.toISOString().split('T')[0];
      const dayName = targetDate.toLocaleDateString('en-US', { weekday: 'long' });
      return {
        date: targetDateString,
        day: dayName,
        count: data?.APPOINTMENTS.filter(appointment => {
          const appointmentDate = new Date(appointment.date).toISOString().split('T')[0];
          return appointmentDate === targetDateString;
        }).length
      };
    });
    return upcomingAppointments;
  };

  const upcomingAppointments = data ? getUpcomingAppointments() : [];

  return (
    <>
      <div className="">
        {data ? (
          <>
            <div className="w-[100%] flex flex-wrap shadow-xl p-4 gap-2 mt-3">
              <Tooltip title='Refresh Data'>
                <button
                  className="rounded-3xl border-black bg-blue-500 p-2 text-white active:bg-black active:dark:bg-white active:dark:text-black"
                  onClick={revalidateData}
                >
                  <RefreshIcon />
                </button>
              </Tooltip>
              <Tooltip title='Profile'>
                <Link
                  className="rounded-3xl border-black bg-red-500 p-2 text-white active:bg-black active:dark:bg-white active:dark:text-black"
                  href={'/admin/profile'}
                >
                  <PersonIcon />
                </Link>
              </Tooltip>
              <Tooltip title='Appointments'>
                <Link
                  className="rounded-3xl border-black bg-green-500 p-2 text-white active:bg-black active:dark:bg-white active:dark:text-black"
                  href={'/admin/appointments'}
                >
                  <BookOnlineIcon />
                </Link>
              </Tooltip>
              <Tooltip title='Messages'>
                <Link
                  className="rounded-3xl border-black bg-purple-500 p-2 text-white active:bg-black active:dark:bg-white active:dark:text-black"
                  href={'/admin/messages'}
                >
                  <MessageIcon />
                </Link>
              </Tooltip>
            </div>
            <Cards data={data} />
            <div className="lg:grid grid-cols-2 gap-4 overflow-x-scroll p-4">
              <div className="h-[300px] mt-20 max-w-[90vw] overflow-y-hidden overflow-x-scroll rounded-3xl shadow-xl dark:bg-slate-200">
                <PieChart
                  series={[
                    {
                      data: [
                        {
                          id: "Unresponded",
                          value: unRespondedCount,
                          label: "Unresponded",
                          color: "yellow",
                        },
                        {
                          id: "Accepted",
                          value: accepted,
                          label: "Accepted",
                          color: "green",
                        },
                        {
                          id: "Dismissed",
                          value: dismissed,
                          label: "Dismissed",
                          color: "red",
                        },
                        {
                          id: "Rescheduled",
                          value: rescheduled,
                          label: "Rescheduled",
                          color: "blue",
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
                      highlightScope: { faded: "global", highlighted: "item" },
                      faded: {
                        innerRadius: 30,
                        additionalRadius: -30,
                        color: "gray",
                      },
                    },
                  ]}
                  width={400}
                  height={400}
                  className="overflow-scroll"
                />
              </div>
              <div className="mt-20 h-[300px] max-w-[90vw] overflow-y-hidden overflow-x-scroll rounded-3xl shadow-xl dark:bg-slate-200">
                <BarChart
                  dataset={upcomingAppointments.map(a => ({ date: a.date, day: a.day, count: a.count }))}
                  xAxis={[
                    { scaleType: 'band', dataKey: 'day' }
                  ]}
                  series={[{ dataKey: 'count', label: 'Appointments' }]}
                  height={300}
                  width={600}
                /> 
              </div>

            </div>

            <div>
              <Table DATA={data?.APPOINTMENTS}/>
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

export default Dashboard;
