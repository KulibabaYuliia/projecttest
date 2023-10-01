import { fetchCocktails } from './drinkifyapi';
import * as basicLightbox from 'basiclightbox';
import { onIngrListClickHandler } from './popupingredients';
// import 'basiclightbox/dist/basiclightbox.min.css';

const cardsGallery = document.querySelector('.cardlist');
const SEARCH_BY_ID_LINK = 'cocktails/lookup/';
const SEARCH_BY_ID_PARAM = 'id';

cardsGallery.addEventListener('click', onLearnMoreClickHandler);

function onLearnMoreClickHandler(e) {
  if (!e.target.classList.contains('cardlist-learn')) {
    return;
  }

  const id = e.target.closest('.cardlist-item').dataset.id;
  fetchCocktails(SEARCH_BY_ID_LINK, SEARCH_BY_ID_PARAM, id).then(resp => {
    const { drinkThumb, instructions, drink, ingredients } = resp[0];

    let ingredientsRaw = ingredients
      .map(ingredient => {
        return `<li data-id="${
          ingredient.ingredientId
        }" class="text item-card"><a href="#" class="ingredient-btn">${
          ingredient.measure || ''
        }${ingredient.title}</a></li>`;
      })
      .join('');

    showModalWindow(ingredientsRaw, drink, instructions, drinkThumb);
  });
}

function showModalWindow(ingredientsRaw, drink, instructions, drinkThumb) {
  const instance = basicLightbox.create(
    `<div class="container-popup">
  <button class="popup-close-btn close-cocktail-modal-x">
    <svg class="popup-close-btn-icon">
      <use href="img/sprite.svg#popup-close-btn"></use>
    </svg>
  </button>
  <div class="box">
    <div class="picture"><img src="${drinkThumb}" alt="${drink}" onerror="this.onerror=null;this.src='../img/rafiki.jpg';"/></div>
    <div>
      <h2 class="name">${drink}</h2>
      <p class="caption-card">Ingredients:</p>
      <p class="text text-card">Per cocktail</p>
      <ul class="list-card ingredients-list">${ingredientsRaw}</ul>
    </div>
  </div>
  <p class="caption-card">Instructions:</p>
  <p class="text desc-card">
   ${instructions}
  </p>
  <button type="button" class="button-card favorite-theme-light">
    add to favorite
  </button>
   <button type="button" class="button-card back-theme-light close-cocktail-modal-back">Back</button>
</div>`,
    {
      onShow: instance => {
        instance.element().querySelector('.close-cocktail-modal-back').onclick =
          instance.close;
        instance.element().querySelector('.close-cocktail-modal-x').onclick =
          instance.close;
      },
    }
  );
  instance.show();
  document
    .querySelector('.ingredients-list')
    .addEventListener('click', onIngrListClickHandler);
}

export {
  onLearnMoreClickHandler,
  showModalWindow,
  SEARCH_BY_ID_LINK,
  SEARCH_BY_ID_PARAM,
};
