import axios, { AxiosResponse } from "axios";
import { ICategory, ICategoryWithProfit } from "../interfaces/entities";
import { API_URL } from "../constatns/api";

interface AddCategoryResponse {
  success: boolean;
  data: ICategory;
  message: string;
}

interface GetCategoryResponse {
  success: boolean;
  data: ICategory;
  message: string;
}

interface GetCategoriesResponse {
  success: boolean;
  data: ICategory[];
  message: string;
}

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



export const addCategoryRequest = async (category: ICategory): Promise<AxiosResponse<AddCategoryResponse>> => {
  try {
    const response = await axios.post<AddCategoryResponse>(`${API_URL}/addCategory`, category);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      throw new Error('Failed to add category: ' + error.message);
    } else {
      console.error('Unexpected error:', error);
      throw new Error('Unexpected error occurred');
    }
  }
};

// export const getCategoryRequest = async (categoryId: string): Promise<AxiosResponse<GetCategoryResponse>> => {
//   try {
//     const response = await axios.get<GetCategoryResponse>(`${API_URL}/findCategory/${categoryId}`);
//     return response;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error('Axios error:', error.message);
//       throw new Error('Failed to get category: ' + error.message);
//     } else {
//       console.error('Unexpected error:', error);
//       throw new Error('Unexpected error occurred');
//     }
//   }
// };

// export const getCategoriesRequest = async (): Promise<ICategory[]> => {
//   try {
//     const response = await axios.get<GetCategoriesResponse>(`${API_URL}/findCategories`);
//     return response.data.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error('Axios error:', error.message);
//       throw new Error('Failed to get categories: ' + error.message);
//     } else {
//       console.error('Unexpected error:', error);
//       throw new Error('Unexpected error occurred');
//     }
//   }
// };

const dummyCategories: ICategory[] = [
  { category_number: '001', category_name: 'Electronics' },
  { category_number: '002', category_name: 'Books' },
  { category_number: '003', category_name: 'Clothing' }
];

export const getCategoriesRequest = async (): Promise<ICategory[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyCategories);
    }, 1000);
  });
};