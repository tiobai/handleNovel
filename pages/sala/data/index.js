import { getData } from "../../../controller/index.js";
const data = getData("data");
const navbarAtributte = {
  className: "list_mobile",
  items: [
    { icon: "../../static/home.svg", title: "home", name: "home" },
    { icon: "../../static/staff.svg", title: "staff", name: "staff" },
    { icon: "../../static/account.svg", title: data.name, name: "profile" },
  ],
};

const menuIcons = {
  menu: "../../static/menu.svg",
  close: "../../static/close.svg",
};

export { navbarAtributte, menuIcons };
