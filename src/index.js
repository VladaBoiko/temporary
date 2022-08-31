import axios from 'axios';
const BASIC_URL = `http://localhost:8881/api/recipe/page?`;

const refs = {
  firstBtn: document.querySelector('.first'),
  secondBtn: document.querySelector('.second'),
  thirdBtn: document.querySelector('.third'),
  fourthBtn: document.querySelector('.fourth'),
  recepiesBox: document.querySelector('.recepies-box'),
  loadMoreBtn: document.querySelector('.load-more'),
};
class GetRecipe {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.newQuery = '';
  }

  async getRecipes() {
    // `${btn}`.disabled = true;
    const serverDataURL = `${BASIC_URL}page=${this.page}&size=5`;
    try {
      const server = await axios.get(serverDataURL);
      const data = await server.data;

      return data;
    } catch (error) {}
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }
}
const newRecipe = new GetRecipe();
refs.firstBtn.addEventListener('click', request(refs.firstBtn));

function request(btn) {
  refs.loadMoreBtn.disabled = true;
  newRecipe.getRecipes(btn).then(data => console.log(data));
}
