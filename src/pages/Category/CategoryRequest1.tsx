import React, { useEffect, useState } from "react";
import { ICategory } from "../../interfaces/entities";
import { fetchCategoryRequest1 } from "../../api/categories";

const CategoryRequest1 = (): JSX.Element => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    fetchCategoryRequest1().then(setCategories);
  }, []);

  return (
    <div className="category-container">
      <h2 className="category-title">
        Вивести всі категорії товарів у яких немає жодного товару, який би не
        був проданий хоча б один раз.
      </h2>
      <div className="category-content">
        {categories.map((category) => (
          <div key={category.category_number} className="category-item">
            <p className="category-number">{category.category_number}</p>
            <p className="category-name">{category.category_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryRequest1;
