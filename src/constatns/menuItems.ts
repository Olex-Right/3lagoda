import Category from "../pages/Category/Category";
import CategoryRequest1 from "../pages/Category/CategoryRequest1";
import CategoryRequest2 from "../pages/Category/CategoryRequest2";
import Employee from "../pages/Employee/Employee";

interface MenuItem {
  name: string;
  link: string;
  component: () =>  JSX.Element;
}

const menuItems: MenuItem[] = [
  { name: "Main", link: "/", component: Employee },
  { name: "Category", link: "/category", component: Category   },
  { name: "Employee", link: "/employee", component: Employee },
  { name: "Categories Request1", link: "/category-request1", component: CategoryRequest1 },
  { name: "Categories Request2", link: "/category-request2", component: CategoryRequest2 },
];

export default menuItems;
