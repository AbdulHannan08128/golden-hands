import AppointmentForm from "./trackForm.jsx";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata:Metadata = {
  title:'Golden Hands | Track Appointment',
  description:'Book Appointment in Golden Hands Clinic'
}
const TrackAppointment = () => {
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

export default TrackAppointment;
