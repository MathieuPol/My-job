//Dropdown button manager

//functions lunching when clicking on the dropdown button
function myFunction() {
  this.closeDropDown();
  const dropDown = document.getElementById("myDropdown");
  const postSelector = document.getElementsByClassName("filter-poste")[0];
  if (postSelector.classList.contains("active-filter")) {
    console.log("");
    postSelector.classList.remove("active-filter");
    dropDown.classList.remove("show");
  } else {
    console.log("active");
    postSelector.classList.add("active-filter");
    dropDown.classList.add("show");
  }
}

function dropContract() {
  this.closeDropDown();
  document.getElementById("dropdown-contract").classList.toggle("show");
  document.getElementsByClassName("filter-contract")[0].classList.toggle("active-filter");

}

function dropMode() {
  this.closeDropDown();
  document.getElementById("dropdown-mode").classList.toggle("show");
  document.getElementsByClassName("filter-mode")[0].classList.toggle("active-filter");

}

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

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  console.log(event.target);
  if (!event.target.matches('button') && !event.target.matches('input')) {
    this.closeDropDown();
  }
  if (event.target.matches('svg')) {
    event.target.parentNode.click();
  }
  if (event.target.matches('path')) {
    event.target.parentNode.parentNode.click();
  }
}