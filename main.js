// require('dotenv').config()console.clear();
// pokemon api url
// https://pokeapi.co/api/v2/pokemon

const pokemonContainer = document.getElementById('pokemon-container');
const pokemon1Container = document.getElementById('pokemon1-container');

const URL = `https://pokeapi.co/api/v2/pokemon/`;

const createPokemon = () => {
  // generate a random number
  let randomNumber = Math.floor(Math.random() * 20) + 1;

  // fetch a random pokemon by concatenating the api url and the random number
  fetch(`${URL}${randomNumber}/`)
  .then(res => res.json())
  .then(data => {
    pokemon = data;

    // create the elements needed to hold the pokemon's data
    const img = document.createElement('img');
    const h4 = document.createElement('h4');
    const abilitiesUL = document.createElement('ul');
    const movesUL = document.createElement('ul');
    const statsUL = document.createElement('ul');

    // set the img source and alt info
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.name;

    // set the pokemon's name to the h4 element
    h4.innerText = `Pokemon: ${pokemon.name.toUpperCase()}`;

    // add titles to the ul elements
    abilitiesUL.innerText = `Abilities:`;
    movesUL.innerText = `Top 3 Moves:`;
    statsUL.innerText = `Stats:`;

    // loop through the pokemon's abilities and list each one
    pokemon.abilities.forEach((ability) => {
      const abilityLI = document.createElement('li');
      abilityLI.innerText = `${ability.ability.name}`;
      abilitiesUL.appendChild(abilityLI);
    });

    // loop through the pokemon's moves and list the first 3
    pokemon.moves.slice(0, 3).forEach((move) => {
      const moveLI = document.createElement('li');
      moveLI.innerText = `${move.move.name}`;
      movesUL.appendChild(moveLI);
    });

    // loop through the pokemon's stats and list each one
    pokemon.stats.forEach((stat) => {
      const statLI = document.createElement('li');
      statLI.innerText = `${stat.stat.name}: ${stat.base_stat}`;
      statsUL.appendChild(statLI);
    });

    // add the new elements to the pokemon container div
    pokemonContainer.appendChild(img);
    pokemonContainer.appendChild(h4);
    pokemonContainer.appendChild(abilitiesUL);
    pokemonContainer.appendChild(movesUL);
    pokemonContainer.appendChild(statsUL);

    // create a new div and 'more info' button to display more stats
    const div = document.createElement('div');
    const btn = document.createElement('button');

    btn.innerText = `Show More`;
    pokemonContainer.appendChild(btn);

    btn.onclick = function showMore() {
      // create a new paragraph to hold the stats 
      const p1 = document.createElement('p');
        
      // create a list of more stats
      let moreStats = `
      Height: ${pokemon.height} decimetres
      Weight: ${pokemon.weight} hectograms
      Species: ${pokemon.species.name}
      Forms: ${pokemon.forms[0].name}
      `;

      // create a new button that will hide the stats
      const hideBtn = document.createElement('button');
      hideBtn.innerText = 'Hide';
      
      // append the div with the new paragraph and button
      p1.innerText = moreStats;
      div.appendChild(p1);
      div.appendChild(hideBtn);

      // hide function to remove the paragraph and button from the div
      hideBtn.onclick = function hide() {
        div.removeChild(p1);
        div.removeChild(hideBtn);
      }
    }
    pokemonContainer.appendChild(div);
  })
}

// create the same function but for a new random pokemon (pokemon1)
const createPokemon1 = () => {
  let randomNumber = Math.floor(Math.random() * 19) + 1;

  fetch(`${URL}${randomNumber}/`)
  .then(res => res.json())
  .then(data => {
    pokemon1 = data;

    const img = document.createElement('img');
    const h4 = document.createElement('h4');
    const abilitiesUL = document.createElement('ul');
    const movesUL = document.createElement('ul');
    const statsUL = document.createElement('ul');

    img.src = pokemon1.sprites.front_default;
    img.alt = pokemon1.name;

    h4.innerText = `Pokemon: ${pokemon1.name.toUpperCase()}`;

    abilitiesUL.innerText = `Abilities:`;
    movesUL.innerText = `Top 3 Moves:`;
    statsUL.innerText = `Stats:`;

    pokemon1.abilities.forEach((ability) => {
      const abilityLI = document.createElement('li');
      abilityLI.innerText = `${ability.ability.name}`;
      abilitiesUL.appendChild(abilityLI);
    });

    pokemon1.moves.slice(0, 3).forEach((move) => {
      const moveLI = document.createElement('li');
      moveLI.innerText = `${move.move.name}`;
      movesUL.appendChild(moveLI);
    });

    pokemon1.stats.forEach((stat) => {
      const statLI = document.createElement('li');
      statLI.innerText = `${stat.stat.name}: ${stat.base_stat}`;
      statsUL.appendChild(statLI);
    });

    pokemon1Container.appendChild(img);
    pokemon1Container.appendChild(h4);
    pokemon1Container.appendChild(abilitiesUL);
    pokemon1Container.appendChild(movesUL);
    pokemon1Container.appendChild(statsUL);

    const div = document.createElement('div');
    const btn = document.createElement('button');

    btn.innerText = `Show More`;
    pokemon1Container.appendChild(btn);

    btn.onclick = function showMore() {
      // create a new paragraph to hold the stats 
      const p1 = document.createElement('p');
        
      // create a list of more stats
      let moreStats = `
      Height: ${pokemon1.height} decimetres
      Weight: ${pokemon1.weight} hectograms
      Species: ${pokemon1.species.name}
      Forms: ${pokemon1.forms[0].name}
      `;

      // create a new button that will hide the stats
      const hideBtn = document.createElement('button');
      hideBtn.innerText = 'Hide';
      
      // append the div with the new paragraph and button
      p1.innerText = moreStats;
      div.appendChild(p1);
      div.appendChild(hideBtn);

      // hide function to remove the paragraph and button from the div
      hideBtn.onclick = function hide() {
        div.removeChild(p1);
        div.removeChild(hideBtn);
      }
    }
    pokemon1Container.appendChild(div);
  })
}