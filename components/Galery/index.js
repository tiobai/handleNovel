import style from "./style.js";
import component from "./component.js";
class GalerySection extends HTMLElement {
  constructor() {
    super();
    this.img = null;
    this.attachShadow({ mode: "open" });
  }

  setAttribute(arr) {
    this.img = arr;
  }

  connectedCallback() {
    this.render();
    this.event();
  }
  render() {
    this.shadowRoot.appendChild(style());
    this.shadowRoot.appendChild(component(this.img));
  }
  event() {
    const caja = this.shadowRoot.querySelectorAll(".caja");
    caja.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.1)";
        item.style.transition = "all 0.5s";
        item.style.zIndex = 200;
      });
      item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
        item.style.transition = "all 0.5s";
        item.style.zIndex = 0;
      });
      item.addEventListener("click", () => {
        const data_tags = JSON.parse(item.getAttribute("data-tags"));
        if (localStorage.getItem("sala")) {
          localStorage.removeItem("sala");
        }
        const title = item.querySelector("p").textContent;
        const data = JSON.stringify({
          id: item.id,
          title: title,
          tags: data_tags,
        });
        localStorage.setItem("sala", data);
        window.open("./pages/sala/index.html", "_blank");
      });
      item.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        console.log("menu contextual activado");
      });
    });
  }
}
customElements.define("galery-section", GalerySection);
