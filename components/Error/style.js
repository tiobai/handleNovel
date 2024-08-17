const style = () => {
  const style = document.createElement("style");
  style.textContent = `
              :host {
                  position: absolute;
                  top: 10%;
                  right: 10%;
                  width: 80%;
                  height: 80%;
                  backdrop-filter: blur(10px);
                  animation: var(--my-animation);
                  z-index: 1000;
              }
              .card {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 50px;
                  width: 50px;
                  border-radius: 50%;
              }
              img {
                  border-radius: 50%;
                  height: 100%;
                  width: 100%;
                  object-fit: cover;
                  }
      `;
  return style;
};

export default style;
