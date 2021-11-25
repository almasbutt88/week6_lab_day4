document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  document.querySelector('#new-item-form').addEventListener('submit', handleFormSubmit);
})

const handleFormSubmit = function (event) {
  event.preventDefault();

  const newTitle = `${event.target.title.value}`;
  const newAuthor = `${event.target.author.value}`;
  const newCategory = `${event.target.category.value}`;
  const newListItem = document.createElement('li');
  const list = document.querySelector('#reading-list');
  newListItem.textContent = `Title: ${newTitle} Author: ${newAuthor} Category: ${newCategory}`;
  list.appendChild(newListItem);
  this.reset()
};
