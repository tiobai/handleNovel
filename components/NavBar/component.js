import list from "./list.js";

const component = (props, icons) => {
  const nav = document.createElement("nav");
  const div = document.createElement("div");
  const divIcon = document.createElement("div");
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  const ul = list(props);

  nav.classList.add("nav", "flex");
  div.classList.add("logo");
  divIcon.classList.add("icon_menu", "flex");
  h1.innerHTML = "HandleNovels";
  img.src = icons.menu;
  img.alt = "menu";
  img.title = "menu";
  img.classList.add("menu");

  div.appendChild(h1);
  divIcon.appendChild(img);
  nav.appendChild(div);
  nav.appendChild(divIcon);
  nav.appendChild(ul);

  return nav;
};

export default component;
