import { ICategory, ICategoryWithProfit } from "../interfaces/category";

export const fetchCategoryRequest1 = async (): Promise<ICategory[]> => {
  const fetchedCategories: ICategory[] = [
    { category_name: "Pastry", category_number: "2" },
    { category_name: "Drinks", category_number: "5" },
    { category_name: "Stationary", category_number: "6" },
    { category_name: "Snacks", category_number: "4" },
    { category_name: "Fruits and Vegetables", category_number: "1" },
  ];
  return fetchedCategories;
};


export const fetchCategoryRequest2 = async (): Promise<ICategoryWithProfit[]> => {
  const fetchedCategories: ICategoryWithProfit[] = [
    { category_name: "Pastry", category_number: "2", profit: 575 },
    { category_name: "Drinks", category_number: "5", profit: 6052 },
    { category_name: "Stationary", category_number: "6", profit: 1250 },
    { category_name: "Meat", category_number: "3", profit: 4510 },
    { category_name: "Snacks", category_number: "4", profit: 3040 },
    { category_name: "Fruits and Vegetables", category_number: "1", profit: 2112 },
  ];
  return fetchedCategories;
};