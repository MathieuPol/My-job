//Dropdown button manager


//functions lunching when clicking on the dropdown button
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementsByClassName("filter-poste")[0].classList.add("active-filter");
   }

  function dropContract() {
    document.getElementById("dropdown-contract").classList.toggle("show");
    document.getElementsByClassName("filter-contract")[0].classList.add("active-filter");

  }

  function dropMode() {
    document.getElementById("dropdown-mode").classList.toggle("show");
    document.getElementsByClassName("filter-mode")[0].classList.add("active-filter");

  }
  
  function dropDate(){
    document.getElementById("dropdown-date").classList.add("show");
  }


//Listen for clicks in drop button and input
  window.onclick = function(event) {
    //if there is a dropdown menu open and the user clicks outside of it, close it
    if (!event.target.matches('.dropBtnMode')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-mode");
      let filterPost = document.getElementsByClassName("filter-mode")[0];
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        //before closing it we listen the input to avoid to close it when the user is typing in the input
        if(event.target.matches('input'))
        {
        }
        else{
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            filterPost.classList.remove('active-filter');
          }
        }
      }
    }
    if (!event.target.matches('.dropBtnContract')) {
        var dropdowns = document.getElementsByClassName("dropdown-content-contract");
        let filterPost = document.getElementsByClassName("filter-contract")[0];
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];

          if(event.target.matches('input'))
          {
          }
          else{
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
              filterPost.classList.remove('active-filter');
            }
          }
  
        }
      }
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        let filterPost = document.getElementsByClassName("filter-poste")[0];
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if(event.target.matches('input'))
          {
          }
          else{
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
              filterPost.classList.remove('active-filter');
              
            }
          }
        }
      }
      if (!event.target.matches('.dropBtnDate')) {
        var dropdowns = document.getElementsByClassName("dropdown-content-date");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
  }
//*-------------------------

let inputElt = document.querySelectorAll('input');
for (let index = 0; index < inputElt.length; index++) {
  inputElt[index].addEventListener("click", handleInputElt);
};

function handleInputElt(evt){
  const backend = document.getElementById('backend');
  const filtered = document.querySelector('.filtered');

  if (evt.target.checked == true) {
    const filterTpl = document.getElementById('filter-template').content.cloneNode(true);
    const container =  filterTpl.querySelector('.filtered-content');

    container.classList.add(evt.target.getAttribute('id'));
    filterTpl.querySelector('.filtered-content p').textContent = evt.target.name;
    filtered.append(filterTpl);
  };
  if (evt.target.checked == false) {

    filtered.removeChild(filtered.querySelector(`.${evt.target.getAttribute('id')}`));
  }
  let closeElt = document.querySelectorAll('.close');
  for (let index = 0; index < closeElt.length; index++) {
    closeElt[index].addEventListener("click", handleCloseElt);
  }
}

function handleCloseElt(evt){
  let parentElt = document.getElementById(evt.target.parentElement.classList[1]);
  if (parentElt.checked == true) {
    parentElt.checked = false;
  }
  evt.target.parentElement.remove();
}