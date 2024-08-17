//<--components-->
import "../../components/NavBar/index.js";
import "../../components/FooterBar/index.js";
import "../../components/StaffCard/index.js";
import "../../components/ProfileCard/index.js";
import "../../components/PruebaCard/index.js";
//<--data-->
import { navbarAtributte, menuIcons } from "./data/index.js";
import { getData } from "../../controller/index.js";

const App = () => {
  const app = document.createElement("div");
  app.id = "app";
  const data = getData("data");
  if (data) {
    const NavBarElement = document.createElement("nav-bar");
    NavBarElement.setAttribute(navbarAtributte);
    NavBarElement.setIcons(menuIcons);
    const PruebaCardElement = document.createElement("prueba-card");
    const FooterBarElement = document.createElement("footer-bar");
    app.appendChild(NavBarElement);
    app.appendChild(PruebaCardElement);
    app.appendChild(FooterBarElement);
  } else {
    window.location.href = "/";
  }
  return app;
};

export default App;
