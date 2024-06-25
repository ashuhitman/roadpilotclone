import React, { useEffect, useState } from "react";
import "./HeaderArea.css";
import HeaderTop from "./HeaderTop";
import Header from "./Header";

function HeaderArea() {
  return (
    <div className="header-area">
      <div className="container-fluid">
        <HeaderTop />
        <Header />
      </div>
    </div>
  );
}

export default HeaderArea;
