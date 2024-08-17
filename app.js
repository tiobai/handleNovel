import "./components/Register/index.js";
import "./components/NavBar/index.js";
import "./components/FooterBar/index.js";
import "./components/Galery/index.js";
import "./components/StaffCard/index.js";
import "./components/ProfileCard/index.js";
import "./components/Error/index.js";

import galeryAtributte from "./data/galeryAtributte.js";
import navbarAtributte from "./data/navbarAtributte.js";
import { getData } from "./controller/index.js";

const App = () => {
  const app = document.createElement("div");
  app.id = "app";
  const data = getData("data");
  if (data) {
    const NavBarElement = document.createElement("nav-bar");
    NavBarElement.setAttribute(navbarAtributte);
    NavBarElement.setIcons({
      menu: "./static/menu.svg",
      close: "./static/close.svg",
    });

    const GaleryElement = document.createElement("galery-section");
    GaleryElement.setAttribute(galeryAtributte);
    // const ErrorElement = document.createElement("error-element");
    const FooterBarElement = document.createElement("footer-bar");
    app.appendChild(NavBarElement);
    app.appendChild(GaleryElement);
    // app.appendChild(ErrorElement);
    app.appendChild(FooterBarElement);
  } else {
    const RegisterUserElement = document.createElement("register-user");
    app.appendChild(RegisterUserElement);
    console.log("RegisterUser");
  }
  return app;
};

export default App;
