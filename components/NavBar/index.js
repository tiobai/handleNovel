import style from "./style.js";
import component from "./component.js";
import { handleClick, handleEvent } from "../../event/index.js";

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.schema = null;
    this.icons = null;
    this.attachShadow({ mode: "open" });
  }

  setAttribute(schema) {
    this.schema = schema;
  }

  setIcons(icons) {
    this.icons = icons;
  }
  static get styles() {
    return style;
  }

  connectedCallback() {
    this.render();
    this.event();
  }

  render() {
    this.shadowRoot.innerHTML = `
       <style>${NavBar.styles}</style>
        `;
    this.shadowRoot.appendChild(component(this.schema, this.icons));
  }
  event() {
    const iconMenu = this.shadowRoot.querySelector(".icon_menu");
    const list = this.shadowRoot.querySelector(".list_mobile");
    const img = this.shadowRoot.querySelector(".menu");
    const h1 = this.shadowRoot.querySelector("h1");
    const staff = this.shadowRoot.querySelector(".staff");
    const profile = this.shadowRoot.querySelector(".profile");
    const home = this.shadowRoot.querySelector(".home");

    handleEvent(h1, "click", () => {
      window.location.href = "/";
    });
    handleEvent(home, "click", () => {
      window.location.href = "/";
    });

    handleEvent(iconMenu, "click", () => {
      handleClick(list, "no_show");
      img.src = img.src.includes("menu") ? this.icons.close : this.icons.menu;
    });
    handleEvent(staff, "click", () => {
      handleClick(list, "no_show");
      img.src = this.icons.menu;
      const staffElement = document.querySelector("staff-card");
      const profileElement = document.querySelector("profile-card");

      const app = document.getElementById("app");
      if (staffElement) {
        app.removeChild(staffElement);
        return;
      }
      if (profileElement) {
        app.removeChild(profileElement);
      }
      const staffCard = document.createElement("staff-card");
      app.appendChild(staffCard);
    });
    handleEvent(profile, "click", () => {
      handleClick(list, "no_show");
      img.src = this.icons.menu;
      const profileElement = document.querySelector("profile-card");
      const staffElement = document.querySelector("staff-card");
      const app = document.getElementById("app");
      if (profileElement) {
        app.removeChild(profileElement);
        return;
      }
      if (staffElement) {
        app.removeChild(staffElement);
      }
      const profileCard = document.createElement("profile-card");
      app.appendChild(profileCard);
    });
  }
}
customElements.define("nav-bar", NavBar);
