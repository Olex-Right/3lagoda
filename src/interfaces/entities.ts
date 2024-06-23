export interface IEmployee {
  id_employee: string;
  empl_surname: string;
  empl_name: string;
  empl_patronymic?: string;
  empl_role: string;
  salary: number;
  date_of_birth: string;
  date_of_start: string;
  phone_number: string;
  city: string;
  street: string;
  zip_code: string;
}

export interface ICategory {
  category_number: string;
  category_name: string;
}

export interface ICategoryWithProfit {
  category_number: string;
  category_name: string;
  profit: number;
}

export interface ISale {
  UPC: string;
  check_number: string;
  product_number: number;
  selling_price: number;
}

export interface IStoreProduct {
  UPC: string;
  UPC_prom?: string;
  id_product: number;
  selling_price: number;
  products_number: number;
  promotion_product: boolean;
}

export interface ICheck {
  check_number: string;
  id_employee: string;
  card_number?: string;
  print_date: string;
  sum_total: number;
  vat: number;
}
export interface ICustomerCard {
  card_number: string;
  card_surname: string;
  card_name: string;
  card_patronymic?: string;
  phone_number: string;
  city?: string;
  street?: string;
  zip_code?: string;
  percent: number;
}