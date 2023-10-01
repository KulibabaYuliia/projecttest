// const backdropIn = document.querySelector('.backdrop-in');
// const modalIn = document.querySelector('.modal-in');
// //const closeBtn = document.querySelector('.modal-in-close-button');
// const titles = document.querySelector('.ingredients-title');
// const description = document.querySelector('.kind-in');
// const mainText = document.querySelector('.main-description-in');
// const listIn = document.querySelector('.ingredients-list');
// const addToFavoriteBtn = document.querySelector('.btn-in');
// //const backBtn = document.querySelector('.btn-back');
// const removeBtn = document.querySelector('.btn-remove');
// const body = document.querySelector('body');

// const SEARCH_BY_ID_LINK = 'ingredients/{id}/';

// const KEY_FAVORITE_INGREDIENTS = 'id';

// const id = e.target.closest('').dataset.id;
// fetchIngredients(SEARCH_BY_ID_LINK, KEY_FAVORITE_INGREDIENTS, id).then(resp => {
//   const { type, country, abv, flavour } = resp[0];

//   let ingredientsRaw = ingredients
//     .map(ingredient => {
//       return `<li class="ingredients-description">Type:${type}</li>
//                 <li class="ingredients-description">Country of origin:${country}</li>
//                 <li class="ingredients-description">Alcohol by volume:${abv}</li>
//                 <li class="ingredients-description">Flavour:${flavour}</li>`;
//     })
//     .join('');

//   showModalWindow(ingredientsRaw, title, type, description);
// });

// function showModalWindow(ingredientsRaw, title, type, description) {
//   const instance = basicLightbox.create(
//     <div class="backdrop-in is-hidden active">
//       <div id="modal-ingredients" class="container modal-in active">
//         <button
//           type="button"
//           data-close-modal
//           class="modal-in-close-button btn-close"
//         >
//           <svg class="icon-in-close" width="11" height="11">
//             <use href="../img/sprite.svg#cross"></use>
//           </svg>
//         </button>

//         <div class="descripe-ingredients">
//           <div class="header-in">
//             <h2 id="ingredients-title" class="ingredients-title">
//               ${title}
//             </h2>
//             <p class="kind-in">${type}</p>
//           </div>
//           <div class="ingredients-information">
//             <p class="main-description-in">${description}</p>
//             <ul class="ingredients-list">${ingredientsRaw}</ul>
//           </div>
//           <div class="buttons-in">
//             <button type="button" id="btn-in" class="btn-in">
//               ADD TO FAVORITE
//             </button>

//             <button type="button" id="btn-remove" class="btn-in btn-remove">
//               REMOVE FROM FAVORITE
//             </button>

//             <button
//               type="button"
//               data-close-modal
//               id="btn-back"
//               class="btn-in btn-back btn-close"
//             >
//               BACK
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>,
//     {
//       onShow: instance => {
//         instance.element().querySelector('.modal-in-close-button').onclick =
//           instance.close;
//         instance.element().querySelector('.btn-back').onclick = instance.close;
//       },
//     }
//   );
//   instance.show();
// }

// //let instance = null;
// //closeBtn.addEventListener('click', closeModal);
// //backBtn.addEventListener('click', closeModal);
// //function closeModal(event) {
// //if (event.code === 'Escape') {
// // instance.close();
// // window.removeEventListener('keydown', closeModal);
// //}
// //}

// //closeBtn.addEventListener('click', closeModal);
// //backBtn.addEventListener('click', closeBtn);
// //backdropIn.addEventListener('click', clickBackdrop);

// //function closeModal() {
// //window.removeEventListener('click');
// //document.body.classList.remove('modal-in.active');
// //backdropIn.classList.remove('backdrop-in');
// //modalIn.classList.remove('backdrop-in');
// //}

// //function clickBackdrop(event) {
// //if (event.currentTarget === event.target) {
// // closeModal();
// //}
// //}

// //async function fetchIngredientsById(id) {
// // const response = await fetch(
// //  https://drinkify.b.goit.study/api/v1/ingredients/${id}
// //);
// //const data = await response.json();
// // return data;
// //}
