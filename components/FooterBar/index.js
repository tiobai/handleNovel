import component from "./component.js";
import style from "./style.js";

class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(component());
  }
}

customElements.define("footer-bar", FooterBar);
