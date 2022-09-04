import renderImgCards from './js/render';
import { refs } from './js/refs';
import { onLoadMore } from './js/render';
refs.firstBtn.addEventListener('click', request);
refs.loadMoreBtn.disabled = true;
function request() {
  refs.choiceBox.remove();
  renderImgCards();
  refs.firstBtn.disabled = true;
}
refs.loadMoreBtn.addEventListener('click', onLoadMore);
