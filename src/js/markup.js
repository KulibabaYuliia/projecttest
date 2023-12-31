import spriteURL from '/img/sprite.svg';
import photoUrl from '/img/rafiki.jpg';

export function createMarkup({ drinkThumb, drink, description, _id }) {
  let markup = `<li class="cardlist-item" data-id=${_id}>
        <img src="${drinkThumb}" class="cardlist-img" alt="${drink}" onerror="this.onerror=null;this.src='${photoUrl}';" width=300>
        <h3 class="cardlist-drink">${drink}</h3>
        <p class="cardlist-descr">${description}</p>
        <div class="cartlist-btns"><button class="cardlist-learn">learn more</button><button class="cardlist-fav"><svg
                class="cardlist-svg" weight="18" height="18">
                <use href="${spriteURL}#heart"></use>
            </svg></button></div>
        </li>`;
  return markup;
}
