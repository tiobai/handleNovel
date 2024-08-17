const handleEvent = (element, event, callback) => {
  element.addEventListener(event, callback);
};
const handleClick = (element, name) => {
  element.classList.toggle(name);
};

export { handleEvent, handleClick };
