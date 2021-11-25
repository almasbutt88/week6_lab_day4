document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  document.querySelector('#new-item-form').addEventListener('submit', handleFormSubmit);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = "Delete all";
  deleteButton.type = 'button';
  const newForm = document.querySelector('#new-item-form');
  newForm.appendChild(deleteButton);
  deleteButton.addEventListener('click', handleButtonClick);
})

const handleFormSubmit = function (event) {
  event.preventDefault();

  const newTitle = `${event.target.title.value}`;
  const newAuthor = `${event.target.author.value}`;
  const newCategory = `${event.target.category.value}`;
  const newListItem = document.createElement('li');
  newListItem.classList.add("single-item")
  const list = document.querySelector('#reading-list');
  // newListItem.textContent = `Title: ${newTitle} Author: ${newAuthor} Category: ${newCategory}`;
  newListItem.innerHTML = `<h2>${newTitle}</h2><br><h3>${newAuthor}</h3><br><h4>${newCategory}</h4>`;
  list.appendChild(newListItem);
  this.reset()
};

const handleButtonClick = function (event) {
document.querySelector('#reading-list').textContent = "";
}


