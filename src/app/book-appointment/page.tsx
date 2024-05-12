import AppointmentForm from "./appointmentForm";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const BookAppointment = () => {
  return (
    <>
      <Header />
      <div>
        <AppointmentForm />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default BookAppointment;
