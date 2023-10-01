import { fetchCocktails } from "./drinkifyapi";
const listFavorite = document.querySelector('.cardlist');
const favoriteArr = [];
const KEY_FAVORITE = 'favorite';

listFavorite.addEventListener('click', onFavorite);

function onFavorite(evt) {
    if (evt.target.classList.contains('.cardlist-fav')) {
        const product = findProduct(evt.target);
        favoriteArr.push(product);
        localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
            
    }
    
}  


function findProduct(elem) {
    const porductId = Number(elem.closest('.cardlist-item').dataset.id);
    return fetchCocktails.find(({ id }) => id === porductId);
}

 