import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import menuItems from "../../constatns/menuItems";
import "./layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="logo">Logo</div>
      <ul className="menu">
        {menuItems.map((menuItem) => (
          <li key={menuItem.link}>
            <Link to={menuItem.link} className="menu-item">
              {menuItem.name}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default Layout;
