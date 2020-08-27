import { setListItemsStorage, setListStorage, getLocalStorage, setLocalStorage, listItemsStorage, listStorage } from './storage';

// let arr = [
//   {}
// ]

/*
 1. create project object
 - add event listener
 - get input value
 - use input value to create object in local storage
 - use local storage to update project field

 -user shouldnt be able to create a list item without a project title

 - add functionality for the close btn on each proj title
 - add horizontal scroll


 2. create todo item
 - add event listener
 - add some validation for the fields
 - get input value and use it to store list items in local storage
 - use local storage to update dom list field

 - add event listener to update list item status
 - add eventlistener for implementing editing functionality
 */
setListItemsStorage();
setListStorage();


function Project(title) {
  this.title = title;
}

const projectInput = document.getElementById('project');
const createProject = document.getElementById('create-project');

createProject.addEventListener('click', () => {
  if (projectInput.value) {
    const newProject = new Project(projectInput.value);
    console.log(newProject);
    setLocalStorage(getLocalStorage(listStorage), listStorage, newProject);
    projectInput.value = '';
    render();
  }
})

const ul = document.querySelector('.list-group');

function render() {
  ul.innerHTML = "";
  let local = getLocalStorage(listStorage);

  local.forEach((item, idx, array) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'm-1', 'pr-3', 'border', 'rounded', 'wrap');
    li.innerText = array[idx].title;

    const icon = document.createElement('i');
    icon.classList.add('fa', 'fa-times-circle', 'ml-2', 'text-danger');

    li.appendChild(icon);
    ul.appendChild(li);
  });
}

var rightBtn = document.getElementById('slide-right');
rightBtn.onclick = function () {
  // var container = document.getElementById('container');
  sideScroll(ul, 'right', 25, 100, 10);
};

var leftBtn = document.getElementById('slide-left');
leftBtn.onclick = function () {
  // var container = document.getElementById('container');
  sideScroll(ul, 'left', 25, 100, 10);
};

function sideScroll(element, direction, speed, distance, step) {
  let scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction == 'left') {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
