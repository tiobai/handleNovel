import style from "./style.js";
import component from "./component.js";
class StaffCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    console.log("Elemento desconectado del DOM");
  }
  render() {
    this.shadowRoot.appendChild(style());
    this.shadowRoot.appendChild(component());
  }
}

customElements.define("staff-card", StaffCard);
