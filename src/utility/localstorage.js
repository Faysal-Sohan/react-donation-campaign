const getStoredItemFromLS = () => {
    const storedItems = localStorage.getItem('donation-details');
    if(storedItems) {
        return JSON.parse(storedItems);
    }
    return [];
}

const saveItemToLS = id => {
    const previousStoredItems = getStoredItemFromLS();
    const exists = previousStoredItems.find(itemId => itemId == id);
    if(!exists) {
        const newItems = [...previousStoredItems, id];
        localStorage.setItem('donation-details', JSON.stringify(newItems));
    }
}

export {getStoredItemFromLS, saveItemToLS}