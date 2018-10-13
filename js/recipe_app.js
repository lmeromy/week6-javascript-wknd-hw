
const handleFormSubmit = function(event){
  event.preventDefault();
  // console.log(event.target.recipeTitle.value);

  const newRecipe = createRecipe(event.target);
  const recipeList = document.querySelector('#recipe-list');
  recipeList.appendChild(newRecipe);

  const form = event.target;
  form.reset();

};


const createRecipe = function (form) {
  const recipeItem = document.createElement('li');
  recipeItem.classList.add('recipe-item');

  const recipeTitle = document.createElement('h4');
  recipeTitle.textContent = form.recipeTitle.value;
  // is it form.title.value?
  recipeItem.appendChild(recipeTitle);

  const category = document.createElement('p');
  category.textContent = `Category: ${form.category.value}`;
  recipeItem.appendChild(category);

  const ingredients = document.createElement('p');
  ingredients.textContent = `Ingredients: ${form.ingredients.value}`;
  recipeItem.appendChild(ingredients);

  const instructions = document.createElement('p');
  instructions.textContent = `How-to: ${form.instructions.value}`;
  recipeItem.appendChild(instructions);

  return recipeItem;
};

const handleDelete = function (event){
  const recipeList = document.querySelector('#recipe-list');

  while (recipeList.firstChild){
    recipeList.removeChild(recipeList.firstChild);
  }

};

document.addEventListener('DOMContentLoaded', () => {
  // console.log('WHATSUP');
  const formSubmit = document.querySelector('#new-recipe-form');
  formSubmit.addEventListener('submit', handleFormSubmit);

  const allDelete = document.querySelector('#delete-all');
  allDelete.addEventListener('click', handleDelete);

});
