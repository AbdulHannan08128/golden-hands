import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Features",
    path: "/features",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Appointment",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Book Appointment",
        path: "/book-appointment",
        newTab: false,
      },
      {
        id: 42,
        title: "Track Appointment",
        path: "/track-appointment",
        newTab: false,
      },
      {
        id: 43,
        title: "Call Us",
        path: 'tel:+91 7051499639',
        newTab: false,
      },
     
    ],
  },
];
export default menuData;
