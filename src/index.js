import GetRecipe from './js/request';
import renderImgCards from './js/render';
import { refs } from './js/refs';
// import { ingridients } from './js/render';
refs.firstBtn.addEventListener('click', request);

function request() {
  refs.loadMoreBtn.disabled = true;

  renderImgCards();
  // ingridients();
}
