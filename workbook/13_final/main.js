window.addEventListener('DOMContentLoaded', () => {
  bindSearchButton();
});

function URL(term) {
  const baseUrl = "https://swapi.co/api/people/";
  return `${baseUrl}?search=${term}`;
}

function bindSearchButton() {
  const button = document.getElementById("search-characters");
  const input = document.getElementById("character-input");
  const baseUrl = "https://swapi.co/api/people/";

  button.onclick = async () => {
    const searchTerm = input.value;
    const response = await fetch(URL(searchTerm));
    const characters = await response.json();
    CharacterList(characters);
  };
}

function CharacterList(characters) {
  const list = document.getElementById("character-list");
  const listItems = `${characters.results.map(character => `<li>${character.name}</li>`).join('')}`;
  list.innerHTML = listItems;
}