//With this method I load json data and display only the active one



fetch("./data.json")
.then(response => {
   return response.json();
})
.then(
    function(data) {
        for (const iterator of data) {
            if (iterator.isActive == true) {
                console.log(iterator);
                const lowerCard = document.getElementById('lower-card').content.cloneNode(true);
//********************************************************************************************* */
//*Used to replace data in the html template with the data from the json file
//********************************************************************************************* */
            if (iterator.jobTitle == 'manager'){
                lowerCard.querySelector('.job-info-label').textContent = 'Projet / Product Management';
            }else{
                lowerCard.querySelector('.job-info-label').textContent = 'Dev ' + iterator.jobTitle.charAt(0).toUpperCase() + iterator.jobTitle.slice(1);
            }

            lowerCard.querySelector('.lower-card-letter').textContent = iterator.company.charAt(0).toUpperCase();


            releaseDate = new Date(iterator.publishDate);
            currentDate = new Date();
            difference = currentDate - releaseDate;
            days = Math.floor(difference / (1000 * 60 * 60 * 24));
            lowerCard.querySelector('.published-since').textContent = 'Il y a ' + days +  ' jours';

            lowerCard.querySelector('.compagny').textContent = iterator.company.charAt(0) + iterator.company.slice(1).toLowerCase() + ' - ' + iterator.city;

            const salaryInEuro = new Intl.NumberFormat(iterator.currency , { style: 'currency', currency: 'EUR' }).format(( Math.round(iterator.salary * 261 / 1000)));
            lowerCard.querySelector('.salary').textContent = salaryInEuro.split(',')[0] + 'K';

            if(iterator.remoteWork !== 'none'){
                if(iterator.remoteWork == 'full'){
                    lowerCard.querySelector('.job-info-button').textContent = 'Télétravail total';
                }else if(iterator.remoteWork == 'regularly'){
                    lowerCard.querySelector('.job-info-button').textContent = 'Télétravail partiel';
                }else if(iterator.remoteWork == 'eventually'){
                    lowerCard.querySelector('.job-info-button').textContent = 'Télétravail ponctuel';
                }else{
                    lowerCard.querySelector('.job-info-button').textContent = 'Non spécifié';
                }
            }else{
                lowerCard.querySelector('.job-info-button').textContent = '';
            }

            if(iterator.contractType.length > 3){
                lowerCard.querySelector('.ctType').textContent = iterator.contractType.charAt(0).toUpperCase() + iterator.contractType.slice(1);
            }else{
                lowerCard.querySelector('.ctType').textContent = iterator.contractType.toUpperCase();
            }
            let container = document.querySelector('.cards-container');


                container.appendChild(lowerCard);
            }
        }
    }
    /* jsondata => console.log(jsondata) */
    );