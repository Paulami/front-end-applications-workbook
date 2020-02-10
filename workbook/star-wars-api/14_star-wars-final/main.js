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
  const resultsContainer = document.getElementById("results-container");
  const baseUrl = "https://swapi.co/api/people/";

  button.onclick = async () => {
    const searchTerm = input.value;
    const response = await fetch(URL(searchTerm));
    const characters = await response.json();
    resultsContainer.innerHTML = CharacterList(characters);
  };
}

function CharacterItem(character) {
  return `<li>${character.name}</li>`
}

function CharacterList(characters) {
  const listItems = `${characters.results.map(character => CharacterItem(character)).join('')}`;
  return `<ul>${listItems}</ul>`;
}