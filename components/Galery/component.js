const component = (arr) => {
  const section = document.createElement("section");
  const h1 = document.createElement("h1");
  const div = document.createElement("div");
  arr.forEach((item) => {
    const divContainer = document.createElement("div");
    // const a = document.createElement("a");
    const p = document.createElement("p");
    const img = document.createElement("img");
    const spanTop = document.createElement("span");
    const spanBottom = document.createElement("span");
    divContainer.classList.add("caja");
    divContainer.id = item.id;
    divContainer.setAttribute("data-tags", JSON.stringify(item.tags));

    img.src = item.img;
    p.textContent = item.title;
    // a.target = "_blank";
    // a.href = item.href;
    spanTop.innerHTML = `<strong class="manga">${item.type}</strong>
                          <strong class="raiting">
                          <img class="star" src="./static/star.svg" alt="star">
                          <span class="item_raiting">${item.raiting}</span>
                          </strong>`;
    spanTop.classList.add("span_top");
    spanBottom.textContent = item.demography;
    spanBottom.classList.add("span_bottom");
    // a.appendChild(img);
    divContainer.appendChild(img);
    divContainer.appendChild(p);
    div.appendChild(divContainer);
    divContainer.appendChild(spanTop);
    divContainer.appendChild(spanBottom);
  });
  h1.textContent = "PROYECTOS";
  div.id = "cuerpo";
  section.classList.add("container");
  section.appendChild(h1);
  section.appendChild(div);
  return section;
};

export default component;
