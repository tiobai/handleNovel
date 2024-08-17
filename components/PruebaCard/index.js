import { getData } from "../../controller/index.js";
class PruebaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `<h1>${getData("sala").title}</h1>`;
  }
}

customElements.define("prueba-card", PruebaCard);
