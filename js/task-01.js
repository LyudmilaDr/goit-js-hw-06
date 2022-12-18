const ulCategories = document.querySelectorAll(`li.item`);
console.log(`Number of categories :`, ulCategories.length);
const numberElementsHeader = document.querySelectorAll(`#categories>li`);
numberElementsHeader.forEach(elem =>{
    console.log(` Category:${elem.firstElementChild.textContent}
    Elements:${elem.lastElementChild.children.length}`);
});