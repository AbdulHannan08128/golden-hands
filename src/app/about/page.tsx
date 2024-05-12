import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golden Hands | About",
  description: "A Clinic Opening Soon In Ganderbal",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
    <Header/>
      <div>
        <Breadcrumb
          pageName="About Golden Hands Clinic"
          description="Your Wellness Journey Starts Here. Compassionate Care, Trusted Expertise and Endless Possibilities."
        />
        <AboutSectionOne />
        <AboutSectionTwo />
      </div>
      <Footer/>
      <ScrollToTop/>
    </>
  );
};

export default AboutPage;
