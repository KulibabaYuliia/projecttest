import"./header_backdrop-5339563b.js";import{b as d}from"./basicLightbox.min-d8571883.js";const o=document.querySelector(".favorite-ingredients-list"),c=document.querySelector(".sorry-ingredients"),s=JSON.parse(localStorage.getItem("KEY_FAVORITE_INGREDIENTS"))??[];c.classList.add("hidden");r(s,o);s.length||c.classList.remove("hidden");o.addEventListener("click",u);function r(i,t){const n=i.map(e=>`<li class="in-card" data-id=${e._id}>
        <h3 class="in-card-title">${e.title}</h3>
        <p class="in-card-alco">${e.alcohol}</p>
        <p class="in-card-descr">${e.description}</p>
        <div class="in-card-btns"><button class="btn-learn-more">learn more</button><button class="btn-remove"><svg class="remove-icon">
                        <use href="./img/sprite.svg#trash"></use>
                    </svg></button></div>
</li>`).join("");t.innerHTML=n}function u(i){if(i.target.classList.contains("btn-learn-more")){const t=a(i.target);d.create(`<div id="modal-ingredients" class="modal-in">
      <button type="button" class="modal-in-close-button close-cocktail-modal-x">
        <svg class="icon-in-close" width="11" height="11">
          <use href="./img/sprite.svg#cross"></use>
        </svg>
      </button>
    <div class="descripe-ingredients" data-id="${t._id}"><div class="header-in">
          <h2 id="ingredients-title" class="ingredients-title">${t.title}</h2>
          <p class="kind-in">${t.type}</p>
        </div>
        <div class="ingredients-information">
          <p class="main-description-in">${t.description||"No data"}</p>
          <ul class="ingredients-spec">
            <li class="ingredients-description">Type: ${t.type}</li>
            <li class="ingredients-description">Country of origin: ${t.country}</li>
            <li class="ingredients-description">Alcohol by volume: ${t.abv}</li>
            <li class="ingredients-description">Flavour: ${t.flavour}</li>
          </ul>
        </div>
        <div class="buttons-in">
          <button class="btn-in">REMOVE FROM FAVORITE</button>
          <button type="button" id="btn-back" class="btn-in btn-back close-cocktail-modal-back">
            BACK
          </button></div></div>`,{onShow:e=>{e.element().querySelector(".close-cocktail-modal-back").onclick=e.close,e.element().querySelector(".close-cocktail-modal-x").onclick=e.close,e.element().querySelector(".btn-in").onclick=l(i)}}).show()}(i.target.closest(".btn-remove")||i.target.closest(".btn-in"))&&(l(i),s.length||c.classList.remove("hidden"))}function a(i){const t=i.closest(".in-card").dataset.id;return s.find(({_id:n})=>n===t)}function l(i){const t=a(i.target),n=s.findIndex(({_id:e})=>e===t._id);s.splice(n,1),localStorage.setItem("KEY_FAVORITE_INGREDIENTS",JSON.stringify(s)),r(s,o)}
