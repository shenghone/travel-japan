import React from "react";
import Logo from "./Logo";
import RedDot from "./RedDot";
import NavBar from "./NavBar";
import "../styles/Layout.css";

const Layout = React.memo(function({ children }) {
  return (
    <div className="LayoutWrapper">
      <Logo />
      <RedDot />
      <NavBar />
      {children}
    </div>
  );
});

export default Layout;
