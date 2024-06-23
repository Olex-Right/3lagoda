interface MenuItem {
  name: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { name: "Main", link: "/" },
  { name: "Category", link: "/category" },
  { name: "Employee", link: "/employee" },
  { name: "Categories Request1", link: "/category-request1" },
  { name: "Categories Request2", link: "/category-request2" },
];

export default menuItems;
