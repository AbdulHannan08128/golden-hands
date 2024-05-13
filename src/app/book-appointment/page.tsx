import AppointmentForm from "./appointmentForm.jsx";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata:Metadata = {
  title:'Golden Hands | Book Appointment',
  description:'Book Appointment in Golden Hands Clinic'
}
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
