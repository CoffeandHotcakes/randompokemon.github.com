const botonPokemon = document.querySelector('#boton-pokemon');
const contenedorPokemon = document.querySelector('#contenedor-pokemon');
const imagenPokemon = document.querySelector('#imagen-pokemon');
const nombrePokemon = document.querySelector('#nombre-pokemon');



botonPokemon.addEventListener('click', () => {
  // Aquí puedes generar un número aleatorio para obtener un Pokémon al azar
  const numeroPokemon = Math.floor(Math.random() * 893) + 1;

  // Crea la URL de la imagen del Pokémon
  const urlImagenPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroPokemon}.png`;

  // Crea la URL de la información del Pokémon
  const urlInfoPokemon = `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`;

  // Usa fetch para obtener la información del Pokémon
  fetch(urlInfoPokemon)
    .then(response => response.json())
    .then(data => {
      // Actualiza la imagen y el nombre del Pokémon
      imagenPokemon.src = urlImagenPokemon;
      nombrePokemon.textContent = data.name;
    });

  // Muestra el contenedor del Pokémon
  contenedorPokemon.style.display = 'block';
});
