import Header from "./Header";
import SideNav from "./sideNav.jsx";

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
