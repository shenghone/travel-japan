import React from "react";
import Logo from "./Logo";
import RedDot from "./RedDot";
import "../styles/Layout.css";

const Layout = React.memo(function({ children }) {
  return (
    <div className="LayoutWrapper">
      <Logo />
      <RedDot />
      {children}
    </div>
  );
});

export default Layout;
