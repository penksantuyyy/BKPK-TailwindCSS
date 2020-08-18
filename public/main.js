const categoryDrowpdown = document.querySelector('#categoryDropdown');
const showCategory = document.querySelector('#showCategory');
const closeCategory = document.querySelector('#closeCategory');

showCategory.addEventListener('click', (e) => {
  categoryDrowpdown.classList.remove('hidden');

  e.preventDefault();
});