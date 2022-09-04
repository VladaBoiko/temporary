import GetRecipe from './request';
import { secondRefs } from './refs';
const newRecipeCard = new GetRecipe();

export default async function renderRecept() {
  const recept = await newRecipeCard.getRecipesById();
  console.log(recept);
  markupRec(recept);
}

function markupRec(recept) {
  const fullRec = `
${recept.id}
<div class="wrapper">
        <img
          src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg"
          alt="Hokkaido Flower"
        />
        <div class="right-side">
          <h2 class="recepie-title">${recept.name}</h2>
          <p class="recepie-description">${recept.description}
          </p>
          <ul class="ingr-list">
          </ul>
        </div>
      </div>
      <div class="bottom-side">
        <p class="prepar-title">directions</p>

        <ul class="preparation-list">
        </ul>
         </div>
`;
  secondRefs.recepiesBox.insertAdjacentHTML('afterbegin', fullRec);
  const ingr = recept.ingredients;
  const directions = recept.directions;
  ingridients(ingr);
  preparation(directions);
}
function ingridients(ingredients) {
  const ingrList = document.querySelector(`.ingr-list`);
  for (i = 0; i < ingredients.length; i += 1) {
    const item = document.createElement('li');
    item.classList.add('ingr-item');
    item.textContent = `${ingredients[i]}`;

    ingrList.append(item);
  }
}
function preparation(directions) {
  const prepList = document.querySelector(`.preparation-list`);
  for (i = 0; i < directions.length; i += 1) {
    const item = document.createElement('li');
    item.textContent = `${directions[i]}`;
    item.classList.add('preparation-item');
    prepList.append(item);
  }
}
