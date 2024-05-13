import Header from './Header'
import SideNav from './sideNav.jsx'

const Layout = ({ children }) => {
  return (
    <div className=" h-screen overflow-hidden lg:grid" style={{gridTemplateColumns:'0.86fr 3fr'}}>
      <div>
     <SideNav/>
     </div>
     <div className="flex flex-col flex-1 overflow-y-auto">
      <Header title='Doctor Panel'/>
     <main className="flex-1 p-5">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
