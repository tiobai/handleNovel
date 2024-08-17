const getData = (name) => {
  const data = localStorage.getItem(name);
  return data ? JSON.parse(data) : false;
};

const saveData = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};

const addData = (data) => {
  const dataObj = getData();
  dataObj.push(data);
  saveData(dataObj);
};

const removeData = (index) => {
  const dataObj = getData();
  dataObj.splice(index, 1);
  saveData(dataObj);
};

export { getData, saveData, addData, removeData };
