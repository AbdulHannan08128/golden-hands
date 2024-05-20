"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TRACK_APPOINTMENT } from "../../../utils/API";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TrackForm = () => {
  const [appID, setAppID] = useState();
  const [appPassword, setAppPassword] = useState();
  const [loading, setLoading] = useState();
  const [appointments, setAppointments] = useState();
  const [rows, setRows] = useState();
  const find = async (e) => {
    e.preventDefault();
    if (!appID || !appPassword) {
      //No App ID or Password
    } else {
      setLoading(true);
      const data = {
        APP_ID: appID,
        password: appPassword,
      };
      try {
        const response = await TRACK_APPOINTMENT(data);
        response?.data?.status == 200 && setLoading(false);
        setAppointments(response?.data?.appointments);
      } catch (error) {
        throw error;
      }
    }
  };

  function createData(APP_ID, name, number, email, residence, date, reason) {
    // Convert the ISO date string to a Date object
    const dateObj = new Date(date);

    // Format the date as "22 May 2024"
    const formattedDate = dateObj
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, " "); // Replace any hyphens or slashes with spaces

    return {
      APP_ID,
      name,
      number,
      email,
      residence,
      date: formattedDate,
      reason
    };
  }

  useEffect(() => {
    let ROWS = [];
    appointments?.forEach((appointment) => {
      const { name, number, email, residence, reason, date, APP_ID } =
        appointment;
      ROWS.push(createData(APP_ID, name, number, email, residence, date, reason));
      
    });
    setRows(ROWS);
  }, [appointments]);
  return (
    <>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {!appointments ? (
        <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                  <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                    Track Your Appointment
                  </h3>
                  <p className="mb-11 text-center text-base font-medium text-body-color">
                    Easily Check Your Appointment Feedback
                  </p>

                  <div className="mb-8 flex items-center justify-center">
                    <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>

                    <span className="hidden h-[1px] w-full max-w-[70px] bg-body-color/50 sm:block"></span>
                  </div>
                  <form>
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        Your Appointment ID
                      </label>
                      <input
                        type="text"
                        name="id"
                        placeholder="Enter your Unique Appointment ID"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        onChange={(e) => {
                          setAppID(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="password"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        Your Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        onChange={(e) => {
                          setAppPassword(e.target.value);
                        }}
                      />
                    </div>

                    <div className="mb-6">
                      <button
                        className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                        onClick={find}
                      >
                        Find Appointment
                      </button>
                    </div>
                  </form>
                  <p className="text-center text-base font-medium text-body-color">
                    Not Booked?{" "}
                    <Link
                      href="/book-appointment"
                      className="text-primary hover:underline"
                    >
                      Book Appointment
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-0 z-[-1]">
            <svg
              width="1440"
              height="969"
              viewBox="0 0 1440 969"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_95:1005"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1440"
                height="969"
              >
                <rect width="1440" height="969" fill="#090E34" />
              </mask>
              <g mask="url(#mask0_95:1005)">
                <path
                  opacity="0.1"
                  d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                  fill="url(#paint0_linear_95:1005)"
                />
                <path
                  opacity="0.1"
                  d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                  fill="url(#paint1_linear_95:1005)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_95:1005"
                  x1="1178.4"
                  y1="151.853"
                  x2="780.959"
                  y2="453.581"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_95:1005"
                  x1="160.5"
                  y1="220"
                  x2="1099.45"
                  y2="1192.04"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
      ) : (
        <>
          <div className="relative z-10 grid w-screen place-items-center overflow-hidden p-5 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
            <TableContainer
              component={Paper}
              className="rounded-lg text-white dark:bg-slate-600 lg:max-w-[80vw]"
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="dark:text-white">App. ID</TableCell>
                    <TableCell className="dark:text-white">Name</TableCell>
                    <TableCell className="dark:text-white">Phone</TableCell>
                    <TableCell className="dark:text-white">Email</TableCell>
                    <TableCell className="dark:text-white">Residence</TableCell>
                    <TableCell className="dark:text-white">Date</TableCell>
                    <TableCell className="dark:text-white">Reason</TableCell>
                    <TableCell className="dark:text-white">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.APP_ID}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className="dark:text-white"
                      >
                        {row.APP_ID}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {row.name}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {row.number}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {row.email}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {row.residence}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {row.date}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {row.reason}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        <div className="flex gap-4">

                        <span className="cursor-pointer rounded-2xl bg-primary px-4 py-2 text-white">
                          Track
                        </span>
                        <span className="cursor-pointer rounded-2xl bg-orange-600 px-4 py-2 text-white">
                          Edit
                        </span>
                        <span className="cursor-pointer rounded-2xl bg-red-600 px-4 py-2 text-white">
                          Cancel
                        </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
    </>
  );
};

export default TrackForm;
