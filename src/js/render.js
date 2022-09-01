import GetRecipe from './request';
import { refs } from './refs';

const newRecipe = new GetRecipe();
export default async function renderImgCards() {
  refs.loadMoreBtn.disabled = false;
  const data = await newRecipe.getRecipes();
  // console.log(data);
  const recepies = data.content;
  markupFirst(recepies);
}

function markupFirst(recepies) {
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
}
function ingridients(ingredients, ident) {
  // console.log(ingredients);
  const ingrList = document.querySelector(`.ingr-list${ident}`);
  for (i = 0; i < ingredients.length; i += 1) {
    // console.log(ingredients[i]);
    const b = document.createElement('li');
    b.textContent = `${ingredients[i]}`;

    ingrList.append(b);
  }
}
