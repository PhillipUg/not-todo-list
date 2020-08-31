import { getLocalStorage, listItemsStorage, updateLocalStorage, listStorage } from './storage';

function closeBtn() {
	const closeBtns = document.querySelectorAll('.fa-times-circle');

	closeBtns.forEach((item, index) => {
		listenClose(item, index);
	});

	function listenClose(item, index) {
		item.addEventListener('click', (e) => {
			const storedItems = [ ...getLocalStorage(listStorage) ];
			storedItems.splice(index, 1);

			const storedListItems = [ ...getLocalStorage(listItemsStorage) ];
			const storedListItemUpdate = storedListItems.filter((itm) => itm.parentId != item.parentNode.id);
			updateLocalStorage(storedItems, listStorage);
			updateLocalStorage(storedListItemUpdate, listItemsStorage);
			location.reload();
		});
	}
}

export default closeBtn;
