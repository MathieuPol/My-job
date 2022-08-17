//*-------------------------
//* Filter Manager
//*-------------------------

//*-------------------------
//*I Setup listeners for the filter
let inputElt = document.querySelectorAll('input');
for (let index = 0; index < inputElt.length; index++) {
  inputElt[index].addEventListener("click", handleInputElt);
};
//*-------------------------

//*-------------------------
//*Filter effect
function handleInputElt(evt){
  const backend = document.getElementById('backend');
  const filtered = document.querySelector('.filtered');

  if (evt.target.checked == true) {
    const filterTpl = document.getElementById('filter-template').content.cloneNode(true);
    const container =  filterTpl.querySelector('.filtered-content');

    container.classList.add(evt.target.getAttribute('id'));
    filterTpl.querySelector('.filtered-content p').textContent = evt.target.name;
    filterTpl.querySelector('.filtered-content p').parentElement.classList.add(evt.target.classList[0]);
    filtered.append(filterTpl);
  };
  if (evt.target.checked == false) {
    filtered.querySelector(`.${evt.target.getAttribute('id')}`).remove();
    
    const allLowerCard = document.querySelectorAll('.lower-card-container');
    for (const card of allLowerCard) {
      card.style.display = 'flex';
    }
  }
    //*-------------------------
    //*On click we generate a closing button
  let closeElt = document.querySelectorAll('.close');
  for (let index = 0; index < closeElt.length; index++) {
    closeElt[index].addEventListener("click", handleCloseElt);
  }
    //*-------------------------
  const allFilter = document.querySelectorAll('.filtered-content');

  let modeFilter  = [];
  let contractFilter = [];
  let posteFilter = [];


  for (const filterIterator of allFilter) {
    if (filterIterator.classList.contains('working-mode')) {
      modeFilter.push(filterIterator);
    }
    if (filterIterator.classList.contains('working-duration')) {
      contractFilter.push(filterIterator);
    }
    if (filterIterator.classList.contains('working-label')) {
      posteFilter.push(filterIterator);
    }
  }

  
//*-------------------------
//*I Setup an aiguilleur to filter the data  
//*-------------------------
const allLowerCard = document.querySelectorAll('.lower-card-container');

if (modeFilter.length > 0) {
    for (const card of allLowerCard) {
      card.style.display = 'none';
      for(const modeIterator of modeFilter){
        if(card.querySelector('.job-info-button').textContent == modeIterator.querySelector('.working-mode p').textContent){
          card.style.display = 'flex';
        }
      }
    }
  }
  
  if (contractFilter.length > 0) {
    for (const card of allLowerCard) {
      card.style.display = 'none';
      for(const contractIterator of contractFilter){
        if(card.querySelector('.ctType').textContent == contractIterator.querySelector('.working-duration p').textContent){
          card.style.display = 'flex';
        }
      }
    }
  }
  
  if (posteFilter.length > 0) {
    for (const card of allLowerCard) {
      card.style.display = 'none';
      for (const postIterator of posteFilter) {
        if(card.querySelector('.job-info-label').textContent == postIterator.querySelector('.filtered-content p').textContent){
          card.style.display = 'flex';
        }
      }
    }
  }

  if (contractFilter.length > 0 && posteFilter.length > 0) {
    for (const card of allLowerCard) {
      card.style.display = 'none';
      for(const contractIterator of contractFilter){
          if(card.querySelector('.ctType').textContent == contractIterator.querySelector('.working-duration p').textContent){
            for (const postIterator of posteFilter) {
              if(card.querySelector('.job-info-label').textContent == postIterator.querySelector('.filtered-content p').textContent){
                card.style.display = 'flex';
              }
            }
          }
        }
      }
    }
  
    if (modeFilter.length > 0 && posteFilter.length > 0) {
      for (const card of allLowerCard) {
        card.style.display = 'none';
        for(const modeIterator of modeFilter){
          if(card.querySelector('.job-info-button').textContent == modeIterator.querySelector('.working-mode p').textContent){
            for (const postIterator of posteFilter) {
              if(card.querySelector('.job-info-label').textContent == postIterator.querySelector('.filtered-content p').textContent){
                card.style.display = 'flex';
              }
            }
          }
        }
      }
    }
    
    if (modeFilter.length > 0 && contractFilter.length > 0) {
      for (const card of allLowerCard) {
        card.style.display = 'none';
        for(const modeIterator of modeFilter){
          if(card.querySelector('.job-info-button').textContent == modeIterator.querySelector('.working-mode p').textContent){
            for(const contractIterator of contractFilter){
              if(card.querySelector('.ctType').textContent == contractIterator.querySelector('.working-duration p').textContent){
                card.style.display = 'flex';
              }
            }
          }
        }
      }
    }

  if (modeFilter.length > 0 && contractFilter.length > 0 && posteFilter.length > 0) {
    for (const card of allLowerCard) {
      card.style.display = 'none';
      for(const modeIterator of modeFilter){
        if(card.querySelector('.job-info-button').textContent == modeIterator.querySelector('.working-mode p').textContent){
          for(const contractIterator of contractFilter){
            if(card.querySelector('.ctType').textContent == contractIterator.querySelector('.working-duration p').textContent){
              for (const postIterator of posteFilter) {
                if(card.querySelector('.job-info-label').textContent == postIterator.querySelector('.filtered-content p').textContent){
                  console.log("ok");
                  card.style.display = 'flex';
                }
              }
            }
          }
        }
      }
    }
  }
}
//*-------------------------
//*End of filter effect
//*-------------------------
//*Next we do the same for closing elements
//*-------------------------

function handleCloseElt(evt){
  let parentElt = document.getElementById(evt.target.parentElement.classList[1]);
  if (parentElt.checked == true) {
    parentElt.checked = false;
  }
  evt.target.parentElement.remove();
  
  const allFilter = document.querySelectorAll('.filtered-content');
  
  let modeFilter  = [];
  let contractFilter = [];
  let posteFilter = [];
  
  
  for (const filterIterator of allFilter) {
    if (filterIterator.classList.contains('working-mode')) {
      modeFilter.push(filterIterator);
    }
    if (filterIterator.classList.contains('working-duration')) {
      contractFilter.push(filterIterator);
    }
    if (filterIterator.classList.contains('working-label')) {
      posteFilter.push(filterIterator);
    }
  }

//*-------------------------
//*I Setup an aiguilleur to filter the data
//*-------------------------
const allLowerCard = document.querySelectorAll('.lower-card-container');
  for (const cardlower of allLowerCard) {
    cardlower.style.display = 'flex';
  }

  if (modeFilter.length > 0) {
    for (const card of allLowerCard) {
      card.style.display = 'none';
      for(const modeIterator of modeFilter){
        if(card.querySelector('.job-info-button').textContent == modeIterator.querySelector('.working-mode p').textContent){
          card.style.display = 'flex';
        }
      }
    }
  }
  
  if (contractFilter.length > 0) {
    for (const card of allLowerCard) {
      card.style.display = 'none';
      for(const contractIterator of contractFilter){
        if(card.querySelector('.ctType').textContent == contractIterator.querySelector('.working-duration p').textContent){
          card.style.display = 'flex';
        }
      }
    }
  }
  
  if (posteFilter.length > 0) {
    for (const card of allLowerCard) {
      card.style.display = 'none';
      for (const postIterator of posteFilter) {
        if(card.querySelector('.job-info-label').textContent == postIterator.querySelector('.filtered-content p').textContent){
          card.style.display = 'flex';
        }
      }
    }
  }
  
  
    
    if (contractFilter.length > 0 && posteFilter.length > 0) {
      for (const card of allLowerCard) {
        card.style.display = 'none';
        for(const contractIterator of contractFilter){
          if(card.querySelector('.ctType').textContent == contractIterator.querySelector('.working-duration p').textContent){
            for (const postIterator of posteFilter) {
              if(card.querySelector('.job-info-label').textContent == postIterator.querySelector('.filtered-content p').textContent){
                card.style.display = 'flex';
              }
            }
          }
        }
      }
    }
  
    if (modeFilter.length > 0 && posteFilter.length > 0) {
      for (const card of allLowerCard) {
        card.style.display = 'none';
        for(const modeIterator of modeFilter){
          if(card.querySelector('.job-info-button').textContent == modeIterator.querySelector('.working-mode p').textContent){
            for (const postIterator of posteFilter) {
              if(card.querySelector('.job-info-label').textContent == postIterator.querySelector('.filtered-content p').textContent){
                card.style.display = 'flex';
              }
            }
          }
        }
      }
      
      
    }
  
    if (modeFilter.length > 0 && contractFilter.length > 0) {
      for (const card of allLowerCard) {
        card.style.display = 'none';
        for(const modeIterator of modeFilter){
          if(card.querySelector('.job-info-button').textContent == modeIterator.querySelector('.working-mode p').textContent){
            for(const contractIterator of contractFilter){
              if(card.querySelector('.ctType').textContent == contractIterator.querySelector('.working-duration p').textContent){
                card.style.display = 'flex';
              }
            }
          }
        }
      }
    }
    
  if (modeFilter.length > 0 && contractFilter.length > 0 && posteFilter.length > 0) {
    for (const card of allLowerCard) {
      card.style.display = 'none';
      for(const modeIterator of modeFilter){
        if(card.querySelector('.job-info-button').textContent == modeIterator.querySelector('.working-mode p').textContent){
          for(const contractIterator of contractFilter){
            if(card.querySelector('.ctType').textContent == contractIterator.querySelector('.working-duration p').textContent){
              for (const postIterator of posteFilter) {
                if(card.querySelector('.job-info-label').textContent == postIterator.querySelector('.filtered-content p').textContent){
                  card.style.display = 'flex';
                }
              }
            }
          }
        }
      }
    }
  }

  
  
}