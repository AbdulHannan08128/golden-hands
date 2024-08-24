import Header from "./Header.js";
import SideNav from "../sideNav.jsx";
import { Metadata } from "next";
export const metadata : Metadata = {
  title:'Admin Panel || GH'
}
export const dynamic = "force-dynamic";
const Layout = ({ children }) => {
  return (
    <div
      className=" h-screen lg:grid"
      style={{ gridTemplateColumns: "0.86fr 3fr" }}
    >
      <div>
        <SideNav />
      </div>
      <div className="flex flex-1 flex-col">
        <Header title="Admin Panel" />
        <main className="flex-1 p-5">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
