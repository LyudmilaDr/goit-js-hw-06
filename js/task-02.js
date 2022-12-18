const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector(`#ingredients`)
const listIngredients = ingredients.map(ingredient => {
 let item =  document.createElement('li');
 item.textContent = ingredient;
 item.className = "item";
 return item;
});
list.append(...listIngredients);
console.log(list);
 
