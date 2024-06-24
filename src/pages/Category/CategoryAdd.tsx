import React, { useState } from "react";
import { ICategory } from "../../interfaces/entities";
import styles from "./Category.module.css";
import { addCategoryRequest } from "../../api/categories";

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
    addCategoryRequest(category);
    setCategory({
      category_number: "",
      category_name: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      {Object.keys(category).map((key) => (
        <div key={key} className={styles.formGroup}>
          <label htmlFor={key} className={styles.label}>
            {key}
          </label>
          <input
            type="text"
            id={key}
            name={key}
            value={category[key as keyof ICategory]}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
      ))}
      <button type="submit" className={styles.button}>
        Add Category
      </button>
    </form>
  );
};

export default CategoryAdd;
