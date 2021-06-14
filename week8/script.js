let divPokemos = document.getElementById('pok');
let divPagination = document.getElementById('pagination');

function loadPokemos(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {

            divPokemos.innerHTML = "";
            divPagination.innerHTML = "";

            for (pokemon of data.results) {
                const name = document.createElement('p');
                name.innerHTML = pokemon.name;
                name.classList.add('capitalize');
                const image = document.createElement('img');

                fetch(pokemon.url)
                    .then(res => res.json())
                    .then(pokemonData => {
                        image.setAttribute('src', pokemonData.sprites.front_default);

                    }).catch(e => console.log(e));

                const article = document.createElement('article');
                article.appendChild(image);
                article.appendChild(name);
                article.classList.add('text-center', 'w-30', 'my-5');
                divPokemos.appendChild(article);
            }

            if (data.previous != null) {
                const prevLink = document.createElement('a');
                prevLink.innerText = "Previous";
                prevLink.classList.add('m-5', 'bg-blue-500', 'text-white', 'font-bold', 'px-4', 'py-2', 'rounded');
                prevLink.setAttribute('href', data.previous);
                divPagination.appendChild(prevLink);
            }

            if (data.next != null) {
                const nextLink = document.createElement('a');
                nextLink.innerText = "Next";
                nextLink.classList.add('m-5', 'bg-blue-500', 'text-white', 'font-bold', 'px-4', 'py-2', 'rounded');
                nextLink.setAttribute('href', data.next);
                divPagination.appendChild(nextLink);
            }
        }).catch(e => console.log(e));
}

document.addEventListener("DOMContentLoaded", () => loadPokemos('https://pokeapi.co/api/v2/pokemon/'));

document.addEventListener("click", e => {
    if (e.target.matches('#pagination a')) {
        e.preventDefault();
        loadPokemos(e.target.getAttribute("href"));
    }
})