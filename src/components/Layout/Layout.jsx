import React from "react";

import Footer from "../Footer/Footer";
import HeaderArea from "../Header/HeaderArea";
import ScrollTopBtn from "../ScrollTopBtn/ScrollTopBtn";
import FixedHeader from "../FixedHeader/FixedHeader";
import Loader from "../Loader/Loader";
import Pulse from "../Pulse/Pulse";

function Layout({ children }) {
  return (
    <>
      {/* Scroll to top buttom */}
      <ScrollTopBtn />
      {/* Header  Area */}
      <HeaderArea />

      {/* fixed header */}
      <FixedHeader />

      {/* Other page area goes here */}
      {children}
      {/* footer */}
      <Footer />
    </>
  );
}

export default Layout;
