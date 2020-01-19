const checkbox = document.getElementById('invert')

function op1()
{
  op1_value=localStorage.getItem("invert");
  if(op1_value.toString()=="true")
  {
    checkbox.checked="true";
    document.body.style.backgroundColor='white';
    document.body.style.webkitFilter='invert(100%)';
  }
  else
  {
    checkbox.checked.click();
    document.body.style.backgroundColor='black';
    document.body.style.webkitFilter='invert(0)';

  }
}

checkbox.addEventListener('change', (event) => {
  if (event.target.checked) 
  {
    var invert = "true";
    localStorage.setItem("invert",invert);
    document.body.style.backgroundColor='white';
    document.body.style.webkitFilter='invert(100%)';
  } else 
  {
    var invert = "false";
    localStorage.setItem("invert",invert);
    document.body.style.backgroundColor='black';
    document.body.style.webkitFilter='invert(0)';
  }
});
