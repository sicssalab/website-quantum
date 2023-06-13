
import dateUtils from "../utils/dateUtils"

const getWithExpiry = (key) => {
	const itemStr = localStorage.getItem(key)
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)
		return null
	}
	return item.value
}

const getWithExpiryObject = (key) => {
	const itemStr = localStorage.getItem(key)
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)
		return null
	}
	return item
}

const deleteObjectWithExpiry = (key) => {
	const itemStr = localStorage.getItem(key)
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}

	const item = JSON.parse(itemStr);
	if(item.expiry !== undefined && item.expiry !== null && item.expiry) {
		const now = new Date()
		// compare the expiry time of the item with the current time
		if (now.getTime() > item.expiry) {
			// If the item is expired, delete the item from storage
			// and return null
			localStorage.removeItem(key)
			return null
		}
	}
}

const getTimerExpiry = (key) => {
	const itemStr = localStorage.getItem(key)
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)
		return null
	}
	return item.expiry;
}

const removeObjectsWithExpiry = () => {
	const localStorageLength = localStorage.length;

	for(let i = 0; i < localStorageLength; i++)
	{
		let key = localStorage.key(i);
		storage.deleteObjectWithExpiry(key)
	}
}

const getLocalStorage = (name) => {
    return getWithExpiry(name)
}

const deleteLocalStorage = (name) => {
    const itemStr = localStorage.getItem(name)

	if (!itemStr) {
		return null
	}

	localStorage.removeItem(name)
}

const setLocalStorage = (name, value, minutes = 15) => {
    const now = new Date()
    const item = {
        value: value,
        expiry: now.getTime() + dateUtils.minutesToSecondsDate(minutes),
    }
    localStorage.setItem(name, JSON.stringify(item))
}

const updateLocalStorage = (name, value) => {
	const old = getWithExpiryObject(name);
	if(old == null)
		return false;
    const item = {
        value: value,
        expiry: old.expiry
    }
    localStorage.setItem(name, JSON.stringify(item))
	return true;
}

const storage = {
    getWithExpiry,
	getTimerExpiry,
	setLocalStorage,
	getLocalStorage,
	updateLocalStorage,
	deleteLocalStorage,
	deleteObjectWithExpiry,
	removeObjectsWithExpiry,
}

export default storage;