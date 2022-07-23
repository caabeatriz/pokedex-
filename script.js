//https://pokeapi.co/api/v2/pokemon/ditto
// instalar lint
// deixar bem estilizado
//1. coolocar a imagem ao fundo da pokedex
// 2. colocar descrição na caixa preta e ela ir digitando
//3. ao clicar no botão ele muda de pokemon
//4. bonus: a pokedex abre e faz sons 
async function  acessApi(namePokemon){
  let acessApiPokemon =  (await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)).json()
  return acessApiPokemon
}

let createPokemon =  async (namePokemon) => {
  let pokemon = await acessApi()
  document.querySelector('#namePokemon').innerHTML = pokemon.species.name;
  document.querySelector('#imgPokemon').src = pokemon.sprites.front_default;
  document.querySelector('#descriptionPokemon').innerHTML = await pokemon.flavor_text_
  entries
  console.log('teste', pokemon);
}

console.log(createPokemon());
