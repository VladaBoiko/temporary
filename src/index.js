import renderImgCards from './js/render';
import { refs } from './js/refs';
refs.firstBtn.addEventListener('click', request);

function request() {
  refs.loadMoreBtn.disabled = true;

  renderImgCards();
}
