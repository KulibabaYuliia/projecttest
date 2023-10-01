//// open\close favorite-list
const favoriteSwitch = document.querySelector(".js-header-link");
const favoriteIcon = document.querySelector(".js-header-link-icon");
const favoriteList = document.querySelector(".js-favorite-list");
let currentRotation = 0;

favoriteSwitch.addEventListener("click", onClickFavorite);

function onClickFavorite() {
  let displayStyle = favoriteList.style.display;
  currentRotation += 180;
  favoriteIcon.style.transform = `rotate(${currentRotation}deg)`;

if (displayStyle === "none" || displayStyle === "") {
    displayStyle = "flex";
  } else {
    displayStyle = "none";
  }
  favoriteList.style.display = displayStyle;
}

/// toggle theme
window.addEventListener("load", windowLoad);

function windowLoad() {
  const bodyBlock = document.body;
  const saveUserTheme = localStorage.getItem('user-theme');
  let userTheme;
  if (window.matchMedia) {
    userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    !saveUserTheme ? changeTheme() : null;
  });

  const themeButton = document.querySelector('.themetoggle');
  const resetButton = document.querySelector('.themetoggle_reset');
  if (themeButton) {
    themeButton.addEventListener("click", function (e) {
      resetButton.classList.add('active');
      changeTheme(true);
    });
  }
  if (resetButton) {
    resetButton.addEventListener("click", function (e) {
      resetButton.classList.remove('active');
      localStorage.setItem('user-theme', '');
    });
  }

  function setThemeClass() {
    if (saveUserTheme) {

      bodyBlock.classList.add(saveUserTheme)
      resetButton.classList.add('active');
    } else {
      bodyBlock.classList.add(userTheme);
    }
  }
  setThemeClass();

  function changeTheme(saveTheme = false) {
    let currentTheme = bodyBlock.classList.contains('light') ? 'light' : 'dark';
    let newTheme;

    if (currentTheme === 'light') {
      newTheme = 'dark';
    } else if (currentTheme === 'dark') {
      newTheme = 'light';
    }
    bodyBlock.classList.remove(currentTheme);
    bodyBlock.classList.add(newTheme);
    saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
  }
}




// function initializeFavoriteList(
//   switchSelector,
//   iconSelector,
//   listSelector
// ) {
//   let currentRotation = 0;

//   function onClickFavorite() {
//     let displayStyle = favoriteList.style.display;
//     currentRotation += 180;
//     favoriteIcon.style.transform = `rotate(${currentRotation}deg)`;

//     if (displayStyle === "none" || displayStyle === "") {
//       displayStyle = "flex";
//     } else {
//       displayStyle = "none";
//     }
//     favoriteList.style.display = displayStyle;
//   }

//   function updateOnResize() {
//     const screenWidth = window.innerWidth;

//     if (screenWidth >= 1280) {
//       // Выполните действия для экранов 1280 пикселей и более
//       console.log("Screen width is 1280 pixels or larger");
//     } else if (screenWidth <= 1279) {
//       // Выполните действия для экранов менее 1280 пикселей
//       console.log("Screen width is less than 1280 pixels");
//     }
//   }

//   const favoriteSwitch = document.querySelector(switchSelector);
//   const favoriteIcon = document.querySelector(iconSelector);
//   const favoriteList = document.querySelector(listSelector);

//   favoriteSwitch.addEventListener("click", onClickFavorite);

//   // Слушаем событие изменения размера экрана
//   window.addEventListener("resize", updateOnResize);

//   // Вызываем функцию обновления при загрузке страницы
//   updateOnResize();
// }

// // Вызываем инициализацию для страницы 1
// initializeFavoriteList(
//   ".js-header-link",
//   ".js-header-link-icon",
//   ".js-favorite-list"
// );

// // Вызываем инициализацию для страницы 2
// initializeFavoriteList(
//   ".js-header-menu-link",
//   ".js-header-menu-link-icon",
//   ".js-favorite-menu-list"
// );
