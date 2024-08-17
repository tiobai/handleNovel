const url = "./static/account.svg";

const component = () => {
  const card = document.createElement("div");
  card.className = "card";
  const img = document.createElement("img");
  img.src = url;
  img.alt = "staff";
  img.className = "img";
  card.appendChild(img);
  return card;
};

export default component;
