//functions lunching when clicking on the dropdown button
function dropDate(){
  this.closeDropDown();
  document.getElementById("dropdown-date").classList.toggle("show");
}

function closeDropDown(){
  const activeDropDown = document.querySelector(".active-filter");
  const allDropDown = document.querySelectorAll(".dropdown-content");
  if(activeDropDown != null){
    allDropDown.forEach(element => {
      element.classList.remove("show");
    });
    activeDropDown.classList.remove("active-filter");
  }
}

// Dropdown manager
window.onclick = function(event) {
  let activeDropDown = document.querySelector(".active-filter");
  let shownDropDown = document.querySelector(".show");
  if (event.target.matches('button') || event.target.matches('input')) {
    if (event.target.matches('button')) {
      if (activeDropDown != null && (shownDropDown.id != event.target.parentNode.nextElementSibling.id)) {
        this.closeDropDown();
      }
      event.target.classList.toggle("active-filter");
      event.target.parentNode.nextElementSibling.classList.toggle("show");
    }
    return;
  }
  if (event.target.matches('svg') && event.target.parentNode.matches('button')) {
    if (activeDropDown != null && (shownDropDown.id != event.target.parentNode.parentNode.nextElementSibling.id)) {
      this.closeDropDown();
    }

    event.target.parentNode.classList.toggle("active-filter");
    event.target.parentNode.parentNode.nextElementSibling.classList.toggle("show");
    return;
  }
  if (event.target.matches('path')) {
    if (activeDropDown != null && (shownDropDown.id != event.target.parentNode.parentNode.parentNode.nextElementSibling.id)) {
      this.closeDropDown();
    }
    event.target.parentNode.parentNode.classList.toggle("active-filter");
    event.target.parentNode.parentNode.parentNode.nextElementSibling.classList.toggle("show");
    return;
  }
  this.closeDropDown();
}