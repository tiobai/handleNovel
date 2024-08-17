import style from "./style.js";
import component from "./component.js";

class ErrorCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot.appendChild(style());
    this.shadowRoot.appendChild(component());
  }
}

customElements.define("error-card", ErrorCard);
