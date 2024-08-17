import component from "./component.js";
import style from "./style.js";
import data from "../../data/index.js";

class RegisterUser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
    this.event();
  }
  disconnectedCallback() {
    console.log("RegisterUser disconnected");
  }

  render() {
    this.shadowRoot.appendChild(style());
    this.shadowRoot.appendChild(component());
  }
  event() {
    const form = this.shadowRoot.querySelector("form");
    const btn1 = this.shadowRoot.querySelector(".register");
    const btn2 = this.shadowRoot.querySelector(".no_register");
    btn1.addEventListener("click", () => {
      // e.preventDefault();
      const name = form.querySelector("input").value;
      if (!name) {
        alert(
          "Nombre es un campo obligatorio, si quiere continuar de forma anónima, presione No Register"
        );
        return;
      } else if (name.length < 4 || name.length > 15) {
        return;
      }
      data.name = name;
      localStorage.setItem("data", JSON.stringify(data));
    });
    btn2.addEventListener("click", () => {
      localStorage.setItem("data", JSON.stringify(data));
    });
  }
}

customElements.define("register-user", RegisterUser);
