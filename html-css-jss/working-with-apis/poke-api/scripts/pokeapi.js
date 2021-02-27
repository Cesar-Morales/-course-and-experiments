const POKE_API = "https://pokeapi.co/api/v2/pokemon/";

const pokeName = document.querySelector('.pokemoName');

const pokeImage = document.querySelector('.pokemonImg');

const numMax = 1;
const numMin = 101;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
    //The maximum is inclusive and the minimum is inclusive
  }


function newPoke(){
    
    const randomPoke = getRandomIntInclusive(numMax, numMin);

    const promise = fetch(POKE_API+randomPoke);
    promise    
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (pokeImage.children.length > 0) {
                const lastPoke = document.querySelector('#pokemon');
                lastPoke.remove();
            }
            pokeName.innerText = data.name + ' #' + randomPoke;
            const img = document.createElement('img');
            img.src = data.sprites.front_default;
            img.id = 'pokemon';
            pokeImage.appendChild(img)
        })
        .catch((err) => {
            console.log(err);
        });
}