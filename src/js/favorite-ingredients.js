
import * as basicLightbox from 'basiclightbox';

const list = document.querySelector(".favorite-ingredients-list");
const sorryImage = document.querySelector(".sorry-ingredients");
const favorite = JSON.parse(localStorage.getItem("KEY_FAVORITE_INGREDIENTS")) ?? [];


sorryImage.classList.add('hidden');
renderMarkup(favorite, list);

if (!favorite.length) {
    sorryImage.classList.remove("hidden");
}

list.addEventListener("click", onClick);


function renderMarkup(arr, container) {
    const markup = arr.map(
        (card) => `<li class="in-card" data-id=${card._id}>
        <h3 class="in-card-title">${card.title}</h3>
        <p class="in-card-alco">${card.alcohol}</p>
        <p class="in-card-descr">${card.description}</p>
        <div class="in-card-btns"><button class="btn-learn-more">learn more</button><button class="btn-remove"><svg class="remove-icon">
                        <use href="./img/sprite.svg#trash"></use>
                    </svg></button></div>
</li>`  
    )
    .join("");

  container.innerHTML = markup;
};

function onClick(e) {
    if (e.target.classList.contains('btn-learn-more')) {
    
        const ingredient = findIngredient(e.target);
        const instance = basicLightbox.create(
            `<div id="modal-ingredients" class="modal-in">
      <button type="button" class="modal-in-close-button close-cocktail-modal-x">
        <svg class="icon-in-close" width="11" height="11">
          <use href="./img/sprite.svg#cross"></use>
        </svg>
      </button>
    <div class="descripe-ingredients" data-id="${ingredient._id}"><div class="header-in">
          <h2 id="ingredients-title" class="ingredients-title">${ingredient.title}</h2>
          <p class="kind-in">${ingredient.type}</p>
        </div>
        <div class="ingredients-information">
          <p class="main-description-in">${ingredient.description || 'No data'
            }</p>
          <ul class="ingredients-spec">
            <li class="ingredients-description">Type: ${ingredient.type}</li>
            <li class="ingredients-description">Country of origin: ${ingredient.country}</li>
            <li class="ingredients-description">Alcohol by volume: ${ingredient.abv}</li>
            <li class="ingredients-description">Flavour: ${ingredient.flavour}</li>
          </ul>
        </div>
        <div class="buttons-in">
          <button class="btn-in">REMOVE FROM FAVORITE</button>
          <button type="button" id="btn-back" class="btn-in btn-back close-cocktail-modal-back">
            BACK
          </button></div></div>`,
            {
                onShow: instance => {
                    instance.element().querySelector('.close-cocktail-modal-back').onclick =
                        instance.close;
                    instance.element().querySelector('.close-cocktail-modal-x').onclick =
                        instance.close;
                    instance.element().querySelector('.btn-in').onclick =
                        removeIngredient(e);
                },
            }
        );
        instance.show();
    }
    if (e.target.closest('.btn-remove')||e.target.closest('.btn-in')) {
        removeIngredient(e);
        if (!favorite.length) {
            sorryImage.classList.remove("hidden");
        }
    }
};

function findIngredient(elem) {
    const productId = elem.closest(".in-card").dataset.id;
    return favorite.find(({ _id }) => _id === productId);
};
    
function removeIngredient(e) {
    const ingredient = findIngredient(e.target);
        const itemToRemove = favorite.findIndex(({ _id }) => _id === ingredient._id);
        favorite.splice(itemToRemove, 1);
        localStorage.setItem("KEY_FAVORITE_INGREDIENTS", JSON.stringify(favorite));
        renderMarkup(favorite, list);
}