const selectElement = (id, valueToSelect) => {
    let element = document.getElementById(id);
    element.value = valueToSelect;
};

const initEventListener = () => {
  document.getElementById('editor').addEventListener('change', event => {
    chrome.storage.sync.set({ favoriteEditor: event.currentTarget.value });
  });
};

const init = () => {
  chrome.storage.sync.get('favoriteEditor', result => {
    const favoriteEditor = result.favoriteEditor;
    selectElement('editor', favoriteEditor);
    initEventListener(favoriteEditor);
  });
};

init();
