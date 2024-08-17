const style = () => {
  const style = document.createElement("style");
  style.textContent = `
      :host {
       display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }
      h1 {
        font-size: 36px;
        margin: 0;
        color: #fff;
        text-align: center;
      }
      form {
        padding: 30px;
        background-color: var(--bg-active);
        backdrop-filter: blur(10px);
        justify-content: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 5px;
        border: 2px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
      input {
        padding: 5px;
        border-radius: 10px;
        background: transparent;
        height: 30px;
        outline: none;
        border: 2px solid rgba(255, 255, 255, 0.2);
        color: #fff;
      }

      .icon {
       position: absolute;
        right: 30px;
        top: 51%;
        transform: translateY(-50%);
      }
        input::placeholder {
          color: #fff;
        }
      .container {
        display: flex;
        justify-content: space-between;
      }
      button {
        cursor: pointer;
        border-radius: 10px;
        padding: 10px;
        background: transparent;
        color: #fff;
        border: 2px solid rgba(255, 255, 255, 0.2);
        width: fit-content;
      }  
      `;
  return style;
};

export default style;
