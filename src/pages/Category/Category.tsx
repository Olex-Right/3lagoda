import React, { useEffect, useState } from "react";
import AddButton from "../../components/Buttons/AddButton";
import { ICategory } from "../../interfaces/entities";
import { getCategoriesRequest } from "../../api/categories";
import styles from './Category.module.css';


const Category = () => {
  const [categories, setCategories] = useState<ICategory[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCategoriesRequest().then((data: ICategory[]) => {
      setCategories(data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <div className={styles.loading}>
      <p>Loading...</p>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.header}>
        <AddButton title="Category" />
        <h2>Categories</h2>
      </div>

      <div className={styles.categoryList}>
        {categories?.map((category) => (
          <div key={category.category_number} className={styles.categoryItem}>
            <p><strong>Number:</strong> {category.category_number}</p>
            <p><strong>Name:</strong> {category.category_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;