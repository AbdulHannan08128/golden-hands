"use client";
import NewsLatterBox from "./NewsLatterBox";
import { useState } from "react";
import { CONTACT } from "utils/API";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";

const Contact = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState();
  const [ok, setOk] = useState();
  const [error, setError] = useState();

  const submit = async (e) => {
    e.preventDefault();
    if (!name || !number || !message) {
      setError('Please Fill In All The Fields');
    } else if (number.length != 10) {
      setError('Seems That Your Phone Number Is Invalid');
    } else {
      setLoading(true);
      const data = {
        name: name,
        number: number,
        message: message,
        time: Date(),
      };
      try {
        const response = await CONTACT(data);
        response.data.status == 200 && setOk(true);
        response.data.status == 200 && setLoading(false);
        setName('');
        setNumber('');
        setMessage('');
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  };

  return (
    <>
      {ok ? (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => {
            setOk(false);
          }}
        >
          <Alert
            onClose={() => {
              setOk(false);
            }}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Contact Form Submitted Successfully
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}
       {
        error&&(
          <Snackbar open={error} autoHideDuration={6000} onClose={()=>{setError(false)}}>
            <Alert
              onClose={()=>{setError(false)}}
              severity="error"
              variant="filled"
              sx={{ width: "100%" }}
            >
              {error}
            </Alert>
          </Snackbar>
        )

        
      }
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s
              "
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Any Objection? Contact Us
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Our support team will get back to you ASAP via email.
                </p>
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          placeholder="Enter your name"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Phone Number
                        </label>
                        <input
                          type="number"
                          placeholder="Enter your Phone Number"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          value={number}
                          onChange={(e) => {
                            setNumber(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          
                          rows={5}
                          placeholder="Enter your Message"
                          className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                          value={message}
                        >
                          {message}
                        </textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                        onClick={submit}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
