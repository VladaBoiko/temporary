import GetRecipe from './request';
import { refs } from './refs';

const newRecipe = new GetRecipe();
export default async function renderImgCards() {
  refs.loadMoreBtn.disabled = false;
  const data = await newRecipe.getRecipes();
  console.log(data);
  const recepies = data.content;
  // const ings = data.content.ingredients;
  markupFirst(recepies);
  // ingridients(recepies);
}
function markupFirst(recepies) {
  recepies
    .map(recipe => {
      // const heading = document.createElement('li');
      // heading.textContent = `${recipe.ingredients}`;
      // console.log(heading);

      const a = `<div class="recepie-card">
        <img
          src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg"
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
          <a href="./pages/recept.html" class="full-res">Read more...</a>
        </div>
      </div>`;
      refs.recepiesBox.insertAdjacentHTML('beforeend', a);
      console.log(recipe);
      const ings = recipe.ingredients;
      const recipeIdent = recipe.id;
      ingridients(ings, recipeIdent);
    })
    .join('');
}

function ingridients(ingredients, ident) {
  console.log(ingredients);
  const ingrList = document.querySelector(`.ingr-list${ident}`);
  // recepies
  //   .map(recipe => {
  for (i = 0; i < ingredients.length; i += 1) {
    console.log(ingredients[i]);
    const b = document.createElement('li');
    b.textContent = `${ingredients[i]}`;

    ingrList.append(b);
    //     }

    //     // ingridients(recepies);
    //   })
    //   .join('');
  }
}
//  const res = data.content;

// const ingrList = document.querySelector('.ingr-list');
// ingrList.append(heading);
// const markupSecond = recepies
//   .map(recipe => {

//   })
//   .join('');
//   notification(total, maxHits);

//   if (newImgService.page === 1) {
//     cardBox.innerHTML = markup;
//   }
//   if (newImgService.page !== 1) {

// ingrList.insertAdjacentHTML('beforeend', markupSecond);
//   }
// }
// const markupFirst =

// export { ingridients };
