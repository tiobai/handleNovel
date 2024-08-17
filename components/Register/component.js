const component = () => {
  const form = document.createElement("form");
  const h1 = document.createElement("h1");
  const input = document.createElement("input");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const button = document.createElement("button");
  const button2 = document.createElement("button");
  h1.textContent = "Register";
  input.type = "text";
  input.name = "name";
  input.placeholder = "User name";
  input.minLength = 4;
  input.maxLength = 15;
  img.classList.add("icon");
  img.src = "./static/account.svg";
  div.classList.add("container");
  button.textContent = "Register";
  button.classList.add("register");
  button2.textContent = "No Register";
  button2.classList.add("no_register");
  form.appendChild(h1);
  form.appendChild(input);
  form.appendChild(img);
  div.appendChild(button);
  div.appendChild(button2);
  form.appendChild(div);
  return form;
};

export default component;
