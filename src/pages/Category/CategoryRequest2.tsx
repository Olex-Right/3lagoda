import React, { useEffect, useState } from "react";
import { ICategoryWithProfit } from "../../interfaces/entities";
import { fetchCategoryRequest2 } from "../../api/categories";

const CategoryRequest2 = (): JSX.Element => {
  const [categories, setCategories] = useState<ICategoryWithProfit[]>([]);
  useEffect(() => {
    fetchCategoryRequest2().then(setCategories);
  }, []);

  return (
    <div className="category-container">
      <h2 className="category-title">
        Вивести суму продажів кожної окремої категорії товарів.
      </h2>
      <div className="category-content">
        {categories.map((category) => (
          <div key={category.category_number} className="category-item">
            <p className="category-number">{category.category_number}</p>
            <p className="category-name">{category.category_name}</p>
            <p className="category-profit">{category.profit} грн</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryRequest2;
