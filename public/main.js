const categoryDrowpdown = document.querySelector('#categoryDropdown');
const showCategory = document.querySelector('#showCategory');
const closeCategory = document.querySelector('#closeCategory');

showCategory.addEventListener('click', (e) => {
  if (showCategory) {
    showCategory.classList.add('hidden');
    categoryDrowpdown.classList.remove('hidden');
    closeCategory.classList.remove('hidden');
  } 
  e.preventDefault();
});

closeCategory.addEventListener('click', (e) => {
  if(closeCategory) {
    showCategory.classList.remove('hidden');
    categoryDrowpdown.classList.add('hidden');
    closeCategory.classList.add('hidden');
  }
  e.preventDefault();
});