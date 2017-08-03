const ITEM_NAME = 'app.state';

/**
* @desc Deletes application state from localStorage
* @return {Boolean}
*/
const deleteState = () => {
  try {
    localStorage.removeItem(ITEM_NAME);
    return true;
  } catch (err) {
    // ignore write -- log error
    return false;
  }
};

/**
* @desc Loads application state from localStorage
* @return {Object|undefined}
*/
const loadState = () => {
  try {
    const serializedState = localStorage.getItem(ITEM_NAME);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    // ignore write -- log error
    return undefined;
  }
};

/**
* @desc Saves application state to localStorage
* @param {Object} state
* @return {Boolean}
*/
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(ITEM_NAME, serializedState);
    return true;
  } catch (err) {
    // ignore write -- log error
    return false;
  }
};

export { deleteState, loadState, saveState };
