import get from './getElement.js';

const mode_toggle = get('.mode-toggle input');
const generations = get('#generations');
const mode = get('.mode');
const changeMode = mode_toggle.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark_mode_body');
    if (body.classList.contains('dark_mode_body')) {
        mode.textContent = 'Dark mode';
    }
    else {
        mode.textContent = 'Light mode';
    }
});
export default changeMode
// to pokemonApp.js