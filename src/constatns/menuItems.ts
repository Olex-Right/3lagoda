interface MenuItem {
  name: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { name: "Main", link: "/" },
  { name: "Category", link: "/category" },
  { name: "Employee", link: "/employee" },
];

export default menuItems;
