import React from "react";
import Logo from "./Logo";
import RedDot from "./RedDot";
import "../styles/Layout.css";

function Layout({ children }) {
  return (
    <div className="LayoutWrapper">
      <Logo />
      <RedDot />
      {children}
    </div>
  );
}

export default Layout;
