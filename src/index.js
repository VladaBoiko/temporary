import renderImgCards from './js/render';
import { refs } from './js/refs';
import { onLoadMore } from './js/render';

refs.loadMoreBtn.disabled = true;
let category = null;

refs.firstBtn.addEventListener('click', requestCream);
refs.secondBtn.addEventListener('click', requestTea);

function requestCream() {
  category = 'cream';
  callFunctions(category);
  refs.firstBtn.disabled = true;
}

function requestTea() {
  category = 'tea';
  callFunctions(category);
  refs.secondBtn.disabled = true;
}

function callFunctions(category) {
  clearStart();
  renderImgCards(category);
  btnDisable();
  refs.loadMoreBtn.addEventListener('click', loadMore);
}

function clearStart() {
  refs.choiceBox.remove();
  refs.recepiesBox.textContent = '';
}

function btnDisable() {
  refs.secondBtn.disabled = false;
  refs.firstBtn.disabled = false;
  // refs.thirdBtn.disabled = false;
  // refs.fourthBtn.disabled = false;
}

function loadMore() {
  onLoadMore(category);
}
