"use client";
import React, { useState } from "react";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BOOK_APPOINTMENT } from "../../../utils/API";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const AppointmentForm = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [residence, setResidence] = useState();
  const [reason, setReason] = useState();
  const [date, setDate] = useState(new Date());
  const [appointmentPassword, setAppointmentPassword] = useState();
  const [conformedAppointmentPassword, setConformedAppointmentPassword] =
    useState();
  const [appId, setAppId] = useState();
  const [loading, setLoading] = useState();
  const [open, setOpen] = useState();
  const [error, setError] = useState();

  const submit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !number ||
      !appointmentPassword ||
      !conformedAppointmentPassword ||
      !date
    ) {
      setError("Please Fill In All The Fields");
    } else if (!email.includes("@")) {
      setError("Make Sure The Email Is Correct");
    } else if (number.length != 10) {
      setError("Seems That Your Phone Number Is Invalid");
    } else if (appointmentPassword != conformedAppointmentPassword) {
      setError("Passwords Not Matching");
    } else {
      setLoading(true);
      let data = {
        name: name,
        number: number,
        email: email,
        residence: residence,
        reason: reason,
        date: date,
        password: appointmentPassword,
      };

      try {
        const response = await BOOK_APPOINTMENT(data);

        // response.data.status == 200 && alert("Appointment Booked Successfully");
        if (response?.data?.status == 200) {
          setAppId(response?.data?.APP_ID);
          setLoading(false);
          setOpen(true);
        } else {
          setAppId(false);
          setLoading(false);
          setOpen(false);
          setError("Internal Server Error");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  return (
    <>
      {appId && (
        <>
          <Dialog open={appId} maxWidth="xl" className="relative">
            <DialogTitle className="dark:bg-slate-600 dark:text-white">
              Appointment Booked Successfully
            </DialogTitle>
            <div className="flex flex-col p-10 dark:bg-slate-600 dark:text-white">
              <span>APPOINTMENT ID:</span>
              <span className="text-2xl font-bold lg:text-3xl lg:font-light">
                {appId}
              </span>
            </div>
            <Link
              href={"/track-appointment"}
              className="p-3 dark:bg-slate-600 dark:text-white"
            >
              Track Appointment {"->"}
            </Link>
          </Dialog>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => {
              setOpen(false);
            }}
          >
            <Alert
              onClose={() => {
                setOpen(false);
              }}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Appointment Booked Successfully
            </Alert>
          </Snackbar>
        </>
      )}
      {error && (
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={() => {
            setError(false);
          }}
        >
          <Alert
            onClose={() => {
              setError(false);
            }}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {error}
          </Alert>
        </Snackbar>
      )}
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Book Appointment
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Book An Appointment To Visit Us
                </p>

                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full max-w-[40px] bg-body-color/50 sm:block"></span>
                  <p className="w-full px-0 text-center text-base font-medium text-body-color">
                    Fill Up The Form With Correct Details
                  </p>
                  <span className="hidden h-[1px] w-full max-w-[40px] bg-body-color/50 sm:block"></span>
                </div>
                <form>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Full Name*{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Phone Number*{" "}
                    </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter your Phone Number"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      onChange={(e) => {
                        setNumber(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Email*{" "}
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your Email"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Residence{" "}
                    </label>
                    <input
                      type="text"
                      name="residence"
                      placeholder="Enter your Residence"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      onChange={(e) => {
                        setResidence(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Reason / Cause Of Visiting{" "}
                    </label>
                    <input
                      type="text"
                      name="reason"
                      placeholder="Enter Cause Of Visiting Us"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      onChange={(e) => {
                        setReason(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Select Date Of Visiting*{" "}
                    </label>
                    <div className="flex gap-7">
                      <DatePicker
                        selected={date}
                        minDate={new Date()}
                        onChange={(date) => setDate(date)}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Set Appointment Password*{" "}
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Set An Appointment Password"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      onChange={(e) => {
                        setAppointmentPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Conform Appointment Password*{" "}
                    </label>
                    <input
                      type="password"
                      name="conform_password"
                      placeholder="Retype Appointment Password"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      onChange={(e) => {
                        setConformedAppointmentPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-8 flex justify-center align-middle ">
                    <label
                      htmlFor="checkboxLabel"
                      className="flex cursor-pointer select-none justify-center text-center align-middle text-sm font-medium text-body-color"
                    >
                      <span className="flex justify-center text-center align-middle">
                        Fee @299 Must Be Paid When You Visit Us
                      </span>
                    </label>
                  </div>
                  <div className="mb-6">
                    <button
                      className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      onClick={submit}
                    >
                      Request Appointment
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Already Booked?{" "}
                  <Link href="/" className="text-primary hover:underline">
                    Track Appointment
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
    </>
  );
};

export default AppointmentForm;
