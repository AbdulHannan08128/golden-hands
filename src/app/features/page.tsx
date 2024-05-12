import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features/index";

import { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Golden Hands | Features",
  description: "A Clinic Opening Soon In Ganderbal",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
    <Header/>
      <div>
        <Breadcrumb
          pageName="Our Features"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        />

        <Features />
      </div>
      <Footer/>
      <ScrollToTop/>
    </>
  );
};

export default ContactPage;
