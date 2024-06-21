import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import menuItems from "../../constatns/menuItems";
import "./layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="sidebar">
        <div className="logo">3Lagoda</div>
        <ul className="menu">
          {menuItems.map((menuItem) => (
            <li key={menuItem.link}>
              <Link to={menuItem.link} className="menu-item">
                {menuItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
