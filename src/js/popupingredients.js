import { fetchIngredients } from './drinkifyapi';
import * as basicLightbox from 'basiclightbox';

const SEARCH_BY_ID_LINK = 'ingredients/';

function onIngrListClickHandler(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'A') {
    return;
  }

  const id = e.target.closest('.item-card').dataset.id;
  fetchIngredients(SEARCH_BY_ID_LINK, id).then(resp => {
    const { _id, title, description, type, abv, flavour, country } = resp[0];

    showModalWindow(_id, title, description, type, abv, flavour, country);
  });
}

function showModalWindow(id, title, description, type, abv, flavour, country) {
  const instance = basicLightbox.create(
    `<div id="modal-ingredients" class="modal-in">
      <button type="button" class="modal-in-close-button close-cocktail-modal-x">
        <svg class="icon-in-close" width="11" height="11">
          <use href="./src/img/sprite.svg#cross"></use>
        </svg>
      </button>
    <div class="descripe-ingredients" data-id="${id}"><div class="header-in">
          <h2 id="ingredients-title" class="ingredients-title">${title}</h2>
          <p class="kind-in">${type}</p>
        </div>
        <div class="ingredients-information">
          <p class="main-description-in">${
            description || 'На жаль дані тимчасово відсутні'
          }</p>
          <ul class="ingredients-spec">
            <li class="ingredients-description">Type: ${type}</li>
            <li class="ingredients-description">Country of origin: ${country}</li>
            <li class="ingredients-description">Alcohol by volume: ${abv}</li>
            <li class="ingredients-description">Flavour: ${flavour}</li>
          </ul>
        </div>
        <div class="buttons-in">
          <button type="button" id="btn-in" class="btn-in">
            ADD TO FAVORITE
          </button>
          <button type="button" id="btn-back" class="btn-in btn-back close-cocktail-modal-back">
            BACK
          </button></div></div>`,
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
}

export { onIngrListClickHandler };
