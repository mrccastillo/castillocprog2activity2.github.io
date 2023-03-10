const references = document.querySelector('.references-content');
const button = document.querySelector('#ref-button');
const buttonClose = document.querySelector('.btn-close');

const referencesCheck = () => {
    references.classList.remove('hide');
}

const removeModal = () => {
    references.classList.add('hide');
}

button.addEventListener('click', referencesCheck);
buttonClose.addEventListener('click', removeModal);