// changing everything to arrow functions!
window.addEventListener('DOMContentLoaded', () => {
  bindButton();
});

// global scope functions should still be regular functions
function bindButton() {
  const button = document.getElementById("fetch-characters");
  const list = document.getElementById("character-list");
  const URL = "https://swapi.co/api/people/";

  button.onclick = async () => {
    const response = await fetch(URL);
    const characters = await response.json();
    CharacterList(characters);
  };
}

function CharacterList(characters) {
  const list = document.getElementById("character-list");
  const listItems = `${characters.results.map(character => `<li>${character.name}</li>`).join('')}`;
  list.innerHTML = listItems;
}