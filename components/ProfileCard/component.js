const component = () => {
  const card = document.createElement("div");
  card.className = "card";
  const img = document.createElement("img");
  img.src = "./static/account.svg";
  img.alt = "profile";
  img.className = "img";
  card.appendChild(img);
  return card;
};

export default component;
