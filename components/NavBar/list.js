const list = (props) => {
  const ul = document.createElement("ul");
  ul.classList.add(props.className, "no_show");
  props.items.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add(item.name);
    li.innerHTML = `
        <img src="${item.icon}" alt="${item.title}" title="${item.title}" />
        <a>${item.title}</a>
        `;
    ul.appendChild(li);
  });
  return ul;
};

export default list;
