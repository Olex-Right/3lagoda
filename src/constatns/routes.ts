import EmployeeAdd from "../pages/Employee/EmployeeAdd";
import menuItems, { IRouteItem } from "./menuItems";

const routesItems: IRouteItem[] = [
  ...menuItems,
  { name: "Add Employee", link: "/employee/add", component: EmployeeAdd },

]


export default routesItems