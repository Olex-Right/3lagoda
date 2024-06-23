import CategoryAdd from "../pages/Category/CategoryAdd";
import EmployeeAdd from "../pages/Employee/EmployeeAdd";
import menuItems, { IRouteItem } from "./menuItems";

const routesItems: IRouteItem[] = [
  ...menuItems,
  { name: "Add Employee", link: "/employee/add", component: EmployeeAdd },
  { name: "Add Category", link: "/category/add", component: CategoryAdd },

]


export default routesItems