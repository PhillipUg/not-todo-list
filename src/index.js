import {
	setListItemsStorage,
	setListStorage,
	getLocalStorage,
	setLocalStorage,
	listItemsStorage,
	updateLocalStorage,
	listStorage,
	listLength
} from './storage';

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
	let idx;
	if (listLength() === 0) {
		idx = 0;
	} else {
		idx = JSON.parse(localStorage.getItem(listStorage))[listLength() - 1].id + 1;
	}
	this.id = idx;
}

function Item(parentId, title, date, description, priority) {
	this.parentId = parentId;
	this.title = title;
	this.date = date;
	this.description = description;
	this.priority = priority;
}

const projectInput = document.getElementById('project');
const createProject = document.getElementById('create-project');

createProject.addEventListener('click', () => {
	if (projectInput.value) {
		const newProject = new Project(projectInput.value);
		setLocalStorage(getLocalStorage(listStorage), listStorage, newProject);
		projectInput.value = '';
		location.reload();
	}
});

const ul = document.querySelector('.list-group');

function render() {
	ul.innerHTML = '';
	let local = getLocalStorage(listStorage);

	local.forEach((item, idx, array) => {
		const li = document.createElement('li');
		li.classList.add('list-group-item', 'm-1', 'pr-4', 'border', 'rounded', 'wrap');
		li.innerText = array[idx].title;
		li.id = array[idx].id;

		const icon = document.createElement('i');
		icon.classList.add('fa', 'fa-times-circle', 'ml-2', 'text-danger');

		li.appendChild(icon);
		ul.appendChild(li);
		if (ul.scrollWidth === ul.clientWidth) {
			rightBtn.style.color = 'grey';
			leftBtn.style.color = 'grey';
		} else {
			rightBtn.style.color = 'black';
		}
	});
}

var rightBtn = document.getElementById('slide-right');
var leftBtn = document.getElementById('slide-left');

rightBtn.onclick = function() {
	let scrolled = ul.scrollWidth - ul.scrollLeft === ul.clientWidth;
	sideScroll(ul, 'right', 25, 100, 10);
	if (scrolled) {
		rightBtn.style.color = 'grey';
	} else {
		rightBtn.style.color = 'black';
		leftBtn.style.color = 'black';
	}
};

leftBtn.onclick = function() {
	sideScroll(ul, 'left', 25, 100, 10);
	if (ul.scrollLeft == 0) {
		leftBtn.style.color = 'grey';
	} else {
		leftBtn.style.color = 'black';
		rightBtn.style.color = 'black';
	}
};

function sideScroll(element, direction, speed, distance, step) {
	let scrollAmount = 0;
	var slideTimer = setInterval(function() {
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
window.onload = render();
let closeBtns = document.querySelectorAll('.fa-times-circle');

closeBtns.forEach((item, index) => {
	listenClose(item, index);
});

function listenClose(item, index) {
	item.addEventListener('click', (e) => {
		console.log(e.target, index);
		let storedItems = [ ...getLocalStorage(listStorage) ];
		storedItems.splice(index, 1);

		updateLocalStorage(storedItems, listStorage);
		location.reload();
	});
}

const clickableLi = document.querySelectorAll('.list-group-item');
clickableLi.forEach((item) => {
	item.addEventListener('click', () => {
		console.log(item.id);
		getItems(item.id);
	});
});

function getItems(id) {
	let items = getLocalStorage(listItemsStorage);
	const result = items.filter((item) => item.parentId == id);
	renderItems(result);
}

function renderItems(result) {
	let items = document.getElementById('items');
	items.innerHTML = '';

	result.forEach((item, idx, array) => {
		const itemsDiv = document.createElement('div');
		itemsDiv.classList.add('border', 'w-100', 'p-1', 'my-1', 'rounded', 'bg-light', 'shadow');

		const itemHeader = document.createElement('div');
		itemHeader.classList.add('w-100', 'd-flex', 'justify-content-between', 'p-2', 'my-1');
		itemsDiv.appendChild(itemHeader);

		const itemTitle = document.createElement('div');
		itemTitle.innerText = item.title;
		itemHeader.appendChild(itemTitle);

		const itemIcons = document.createElement('div');
		itemIcons.classList.add('d-flex');
		itemHeader.appendChild(itemIcons);

		const itemEdit = document.createElement('i');
		itemEdit.classList.add('fa', 'fa-pencil', 'm-1');

		const itemStatus = document.createElement('i');
		itemStatus.classList.add('fa', 'fa-check-circle', 'm-1');

		itemIcons.appendChild(itemEdit);
		itemIcons.appendChild(itemStatus);

		const itemDetail = document.createElement('div');

		const itemDate = document.createElement('div');
		itemDate.innerText = 'Date: ' + item.date;

		const itemDescription = document.createElement('div');
		itemDescription.innerText = 'Description: ' + item.description;

		const itemPriority = document.createElement('div');
		itemPriority.innerText = 'Priority: ' + item.priority;

		itemDetail.appendChild(itemDescription);
		itemDetail.appendChild(itemDate);
		itemDetail.appendChild(itemPriority);
		itemsDiv.appendChild(itemDetail);

		items.appendChild(itemsDiv);
	});
}
