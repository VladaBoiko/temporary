import GetRecipe from './request';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';

const newRecipe = new GetRecipe();
export default async function renderImgCards() {
  refs.loadMoreBtn.disabled = false;
  const data = await newRecipe.getRecipes();
  const recepies = data.content;
  markupFirst(recepies);
  Notify.success(`We found ${data.totalElements} recipes in this category.`);
}

function markupFirst(recepies) {
  if (recepies.length < 2) {
    refs.loadMoreBtn.disabled = true;
    Notify.warning(
      "We're sorry, but you've reached the end of search results."
    );
  }
  recepies
    .map(recipe => {
      const a = `<div class="recepie-card">
        <img
          src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg"
          alt="Hokkaido Flower"
        />
        <div class="recepie-info">
        <p>
            ${recipe.id}
          </p>
          <h2 class="recepie-title">
            ${recipe.name}
          </h2>
          <p class="recepie-description">
            ${recipe.description}
          </p>
          <ul class="ingr-list${recipe.id}">
          </ul>
          <a href="../recept.html" class="full-res full-res${recipe.id}">Read more...</a>
        </div>
      </div>`;
      refs.recepiesBox.insertAdjacentHTML('beforeend', a);
      const ings = recipe.ingredients;
      const recipeIdent = recipe.id;
      ingridients(ings, recipeIdent);

      const link = document.querySelector(`.full-res${recipe.id}`);
      link.addEventListener('click', () => {
        localStorage.setItem('id', JSON.stringify(`${recipe.id}`));
      });
    })
    .join('');
  refs.loadMoreBtn.textContent = 'Load more...';
}
function ingridients(ingredients, ident) {
  const ingrList = document.querySelector(`.ingr-list${ident}`);
  for (i = 0; i < ingredients.length; i += 1) {
    const b = document.createElement('li');
    b.textContent = `${ingredients[i]}`;

    ingrList.append(b);
  }
}
async function onLoadMore() {
  newRecipe.incrementPage();
  const data = await newRecipe.getRecipes();
  const recepies = data.content;
  markupFirst(recepies);
  // if (recepies.length < 2) {
  //   Notify.warning(
  //     "We're sorry, but you've reached the end of search results."
  //   );
  // }
}
export { onLoadMore };
