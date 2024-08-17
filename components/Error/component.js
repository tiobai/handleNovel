const component = () => {
  const card = document.createElement("div");
  card.className = "card";
  const img = document.createElement("img");
  img.src = "./static/error.svg";
  img.alt = "error";
  img.className = "img";
  card.appendChild(img);
  return card;
};

export default component;
