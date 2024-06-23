import React, { useState } from "react";
import { ICategory } from "../../interfaces/entities";

interface CategoryAddProps {
  onSubmit: (category: ICategory) => void;
}

const CategoryAdd: React.FC<CategoryAddProps> = ({ onSubmit }) => {
  const [category, setCategory] = useState<ICategory>({
    category_number: "",
    category_name: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategory((prevCategory: any) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(category, "category");
    setCategory({
      category_number: "",
      category_name: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(category).map((key) => (
        <div key={key}>
          <label htmlFor={key}>{key}</label>
          <input
            type="text"
            id={key}
            name={key}
            value={category[key as keyof ICategory]}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryAdd;
