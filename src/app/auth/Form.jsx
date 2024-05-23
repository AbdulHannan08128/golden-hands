"use client";
import React from "react";
import { ADMIN_LOGIN } from "../../../utils/API";
import Link from "next/link";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { setCookie } from "./setCookie";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [login, setLogin] = useState(false);

  const find = async (e) => {
    e.preventDefault();

    if (!adminEmail || !adminPassword) {
      // Display error message to the user
      console.log("Please provide both email and password.");
      return;
    }

    setLoading(true);
    const data = {
      email: adminEmail,
      password: adminPassword,
    };

    try {
      const response = await ADMIN_LOGIN(data);
      if (response?.data?.status === 200) {
        setLogin(true);
        setAdmin(response?.data?.ADMIN);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      // Handle error state here
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (login && admin) {
      
      try {
        setCookie( "GH_ADMIN_ID", admin.id);
        setCookie( "GH_ADMIN_PASSWORD", admin.password);
      } catch (error) {
        console.log(error);
      } finally{
        router.push('/admin');
      }
      
    }
  }, [login, admin, router]);

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
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Sign In
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Admin Panel Sign In
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
                      Your Admin Email
                    </label>
                    <input
                      type="email"
                      name="id"
                      placeholder="Enter your Admin Email"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      onChange={(e) => {
                        setAdminEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Your Admin Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      onChange={(e) => {
                        setAdminPassword(e.target.value);
                      }}
                    />
                  </div>

                  <div className="mb-6">
                    <button
                      className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                      onClick={find}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Forgot Password?{" "}
                  <Link
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    Contact Us
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

export default Form;
