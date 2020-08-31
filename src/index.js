import { setListItemsStorage, setListStorage, listItemsStorage, listStorage, listLength } from './storage';

import { render } from './domContent';
import closeBtn from './closeBtns';
import { createProjects, removeItem, clickableLis, projectItmBtns } from './getItems';


const projectInput = document.getElementById('project');
const createProject = document.getElementById('create-project');
const ul = document.querySelector('.list-group');
const rightBtn = document.getElementById('slide-right');
const leftBtn = document.getElementById('slide-left');


setListItemsStorage();
setListStorage();

createProjects();

window.onload = render();

closeBtn();

removeItem();

clickableLis();

projectItmBtns();
