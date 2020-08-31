import Head from "next/head";
import Lib from "../components/Lib";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashBoard from "../components/DashBoard";
import Logout from '../components/modal/Logout'
export default function Home() {
  return (
    <div>
      <Lib />
      {/* Page Wrapper */}
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <DashBoard /> 
          </div>
      
          <Footer />
        </div>
     
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
      {/* Logout Modal*/}
      <Logout />
    </div>
  );
}
