let listStorage = "list";
const setListStorage = () => {
  let listLen = 0;
  if (JSON.parse(localStorage.getItem(listStorage))) {
    listLen = JSON.parse(localStorage.getItem(listStorage)).length;
  } else {
    localStorage.setItem(listStorage, JSON.stringify([]));
  }
}

let listItemsStorage = "list-items";
const setListItemsStorage = () => {
  let listItemsLen = 0;
  if (JSON.parse(localStorage.getItem(listItemsStorage))) {
    listItemsLen = JSON.parse(localStorage.getItem(listItemsStorage)).length;
  } else {
    localStorage.setItem(listItemsStorage, JSON.stringify([]));
  }
}

function getLocalStorage(name) {
  let local = JSON.parse(localStorage.getItem(name));
  return local;
}

function setLocalStorage(array, name, value) {
  array.push(value)
  localStorage.setItem(name, JSON.stringify(array));
}

export { setListItemsStorage, setListStorage, setLocalStorage, getLocalStorage, listStorage, listItemsStorage };