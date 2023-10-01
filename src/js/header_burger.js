
/// open/close modal burger

document.addEventListener("DOMContentLoaded", function () {
  const btnMenuBurger = document.querySelector(".js-header-menu-burger");
  const modalBurger = document.querySelector(".js-header-backdrop");
  const closeModalBurger = document.querySelector(".js-header-menu-close");

  function onClickBurger() {
    modalBurger.style.transform = "translateX(0)";
    closeModalBurger.addEventListener("click", onClickCloseModalBurger);
    btnMenuBurger.removeEventListener("click", onClickBurger);
  }

  function onClickCloseModalBurger() {
    const modalBurger = document.querySelector(".js-header-backdrop");
    modalBurger.style.transform = "translateX(100%)";
    btnMenuBurger.addEventListener("click", onClickBurger);
  }

  btnMenuBurger.addEventListener("click", onClickBurger);
});
