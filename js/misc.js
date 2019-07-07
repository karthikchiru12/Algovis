const checkbox = document.getElementById('invert')

checkbox.addEventListener('change', (event) => {
  if (event.target.checked) 
  {
    document.body.style.backgroundColor='white';
    document.body.style.webkitFilter='invert(100%)';
  } else 
  {
    document.body.style.backgroundColor='black';
    document.body.style.webkitFilter='invert(0)';
  }
});