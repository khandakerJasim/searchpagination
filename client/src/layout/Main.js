import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../share/Navbar";
import Footer from "./../share/Footer";
//import Theme from "../component/Theme/Theme";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
