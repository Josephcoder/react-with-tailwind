import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col" style={{ background: '#f2f3f7' }}>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 container mx-auto my-14 py-4 px-4 sm:ml-64">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
