import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact/index.jsx";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Golden Hands Clinic || @Dr Aijaz Ahmad",
  description: "Golden Hands Clinic is committed to providing compassionate and comprehensive healthcare services to the residents of Ganderbal and surrounding areas.",
  keywords: ["Dr Aijaz Ahmad Rather","Dr. Aijaz Ahmad","Aijaz Ahmad","dr aijaz ahmad rather", "dr aijaz ahmad","aijaz ahmad", "Golden Hands", "golden hands", "GH", "gh", "Golden Hands Clinic", "golden hands clinic","clinic", "healthcare", "Ganderbal", "medical services"],
  author: "Abdul Hannan",
  location: {
    city: "Ganderbal",
    country: "India",
    coordinates: {
      latitude: 34.2035,
      longitude: 74.5577
    }
  },
  category: "Healthcare",
  tags:["Dr Aijaz Ahmad Rather","Dr. Aijaz Ahmad","Aijaz Ahmad","dr aijaz ahmad rather", "dr aijaz ahmad","aijaz ahmad", "Golden Hands", "golden hands", "GH", "gh", "Golden Hands Clinic", "golden hands clinic","clinic", "healthcare", "Ganderbal", "medical services"],
  language: "en-US",
  image: "path/to/image.jpg",
  url: "https://golden-hands.in",
  socialMedia: {
    twitter: "@GoldenHandsClinic",
    facebook: "/GoldenHandsClinic",
    instagram: "@GoldenHandsClinic",
    linkedin: "/company/golden-hands-clinic"
  },
  contact: {
    email: "mohammadayaan08128@gmail.com",
    phone: "+91 7051499639",
    address: {
      street: "",
      city: "Ganderbal",
      state: "Jammu and Kashmir",
      postalCode: "191201",
      country: "India"
    }
  },
  openingHours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "9:00 AM - 2:00 PM",
    sunday: "Closed"
  },
  servicesOffered: ["General Medicine", "Surgery"],
  team: [
    {
      name: "Dr. Aijaz Ahmad Rather",
      title: "Specialized Surgeon and Doctor",
      bio: "",
      image: "",
      socialMedia: {
        twitter: "@",
        linkedin: ""
      }
    },
    // More team members can be added here
  ],
 


  additionalInfo: "Golden Hands Clinic is committed to providing compassionate and comprehensive healthcare services to the residents of Ganderbal and surrounding areas.",

};


export default function Home() {
  return (
    <>
    <Header/>
    <div>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </div>
    <Footer/>
    <ScrollToTop/>
      
    </>
  );
}
