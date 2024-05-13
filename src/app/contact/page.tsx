import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact/index.jsx";

import { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Golden Hands | Contact",
  description: "",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
    <Header/>
      <div>
        <Breadcrumb
          pageName="Contact Us"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        />

        <Contact />
      </div>
      <Footer/>
      <ScrollToTop/>
    </>
  );
};

export default ContactPage;
