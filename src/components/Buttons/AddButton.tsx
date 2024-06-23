import React from "react";
import { Link } from "react-router-dom";

interface AddButtonProps {
  title: string;
  link?: string;
}
const AddButton: React.FC<AddButtonProps> = ({ title, link = "add" }) => {
  return (
    <Link to={link}>
      <button className="add-button">+ {title}</button>
    </Link>
  );
};

export default AddButton;
