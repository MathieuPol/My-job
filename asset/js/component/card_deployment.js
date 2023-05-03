//const fx = require("./monney");

const deploy = {
    init: function () {
        deploy.deploy();
        deploy.filterBy();

    },

    deploy: function () {
        const selectElt = document.querySelector('#current-filter');

        document.querySelector('.cards-container').innerHTML = '';

        fetch("asset/data/data.json")
            .then(response => {
                return response.json();
            })
            .then(
                function (data) {

                    if (document.querySelector('#current-filter').textContent == 'Date') {


                        function sortByDate(a, b) {
                            return new Date(b.publishDate) - new Date(a.publishDate);
                        }
                        data.sort(sortByDate);
                    }
                    if (document.querySelector('#current-filter').textContent == 'Salaire') {

                        function sortBySalary(a, b) {
                            return b.salary - a.salary;
                        }
                        data.sort(sortBySalary);
                    }

                    for (const iterator of data) {
                        if (iterator.isActive == true) {
                            const lowerCard = document.getElementById('lower-card').content.cloneNode(true);
                            //********************************************************************************************* */
                            //*Used to replace data in the html template with the data from the json file
                            //********************************************************************************************* */
                            // Job label
                            if (iterator.jobTitle == 'manager') {
                                lowerCard.querySelector('.job-info-label').textContent = 'Project / Product Management';
                                lowerCard.querySelector('.card-job-info-label').textContent = 'Project / Product Management';

                            } else {
                                lowerCard.querySelector('.job-info-label').textContent = 'Dev ' + iterator.jobTitle.charAt(0).toUpperCase() + iterator.jobTitle.slice(1);
                                lowerCard.querySelector('.card-job-info-label').textContent = 'Dev ' + iterator.jobTitle.charAt(0).toUpperCase() + iterator.jobTitle.slice(1);
                            }

                            // compagny letter
                            lowerCard.querySelector('.lower-card-letter').textContent = iterator.company.charAt(0).toUpperCase();
                            lowerCard.querySelector('.card-letter').textContent = iterator.company.charAt(0).toUpperCase();

                            // release date
                            releaseDate = new Date(iterator.publishDate);
                            currentDate = new Date();
                            difference = currentDate - releaseDate;
                            days = Math.floor(difference / (1000 * 60 * 60 * 24));

                            lowerCard.querySelector('.published-since').textContent = 'Il y a ' + days + ' jours';
                            lowerCard.querySelector('.card-published-date').textContent = 'Il y a ' + days + ' jours';

                            // company name + city
                            lowerCard.querySelector('.compagny').textContent = iterator.company.charAt(0) + iterator.company.slice(1).toLowerCase() + ' - ' + iterator.city;
                            lowerCard.querySelector('.card-compagny').textContent = iterator.company.charAt(0) + iterator.company.slice(1).toLowerCase() + ' - ' + iterator.city;


                            // salary
                            //const salaryInEuro = new Intl.NumberFormat(iterator.currency , { style: 'currency', currency: 'EUR' }).format(( Math.round(iterator.salary)));
                            let salaryInEuro = Math.round(convertToEur(iterator.currency, iterator.salary));

                            lowerCard.querySelector('.salary').textContent = salaryInEuro + 'K';
                            lowerCard.querySelector('.card-salary').textContent = salaryInEuro + 'K';

                            // job mode
                            if (iterator.remoteWork !== 'none') {
                                if (iterator.remoteWork == 'full') {
                                    lowerCard.querySelector('.job-info-button').textContent = 'Télétravail total';
                                    lowerCard.querySelector('.job-info-button').classList.add('display-tele-total');

                                    lowerCard.querySelector('.card-job-info-button').textContent = 'Télétravail total';
                                    lowerCard.querySelector('.card-job-info-button').classList.add('display-tele-total');
                                } else if (iterator.remoteWork == 'regularly') {
                                    lowerCard.querySelector('.job-info-button').textContent = 'Télétravail partiel';
                                    lowerCard.querySelector('.job-info-button').classList.add('display-tele-partiel');

                                    lowerCard.querySelector('.card-job-info-button').textContent = 'Télétravail partiel';
                                    lowerCard.querySelector('.card-job-info-button').classList.add('display-tele-partiel');

                                } else if (iterator.remoteWork == 'eventually') {
                                    lowerCard.querySelector('.job-info-button').textContent = 'Télétravail ponctuel';
                                    lowerCard.querySelector('.job-info-button').classList.add('display-tele-ponctu');
                                    lowerCard.querySelector('.card-job-info-button').textContent = 'Télétravail ponctu';
                                    lowerCard.querySelector('.card-job-info-button').classList.add('display-tele-ponctu');

                                } else {
                                    lowerCard.querySelector('.job-info-button').textContent = 'Non spécifié';
                                    lowerCard.querySelector('.job-info-button').classList.add('hide');
                                    lowerCard.querySelector('.card-job-info-button').textContent = 'Non spécifié';
                                    lowerCard.querySelector('.card-job-info-button').classList.add('hide');

                                }
                            } else {
                                lowerCard.querySelector('.job-info-button').textContent = '';
                                lowerCard.querySelector('.job-info-button').classList.add('hide');

                                lowerCard.querySelector('.card-job-info-button').textContent = '';
                                lowerCard.querySelector('.card-job-info-button').classList.add('hide');

                            }

                            if (iterator.contractType.length > 3) {
                                lowerCard.querySelector('.ctType').textContent = iterator.contractType.charAt(0).toUpperCase() + iterator.contractType.slice(1);
                                lowerCard.querySelector('.card-contract').textContent = iterator.contractType.charAt(0).toUpperCase() + iterator.contractType.slice(1);

                            } else {
                                lowerCard.querySelector('.ctType').textContent = iterator.contractType.toUpperCase();
                                lowerCard.querySelector('.card-contract').textContent = iterator.contractType.toUpperCase();
                            }

                            // job begin date
                            let startDate = new Date(iterator.startDate);
                            const month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
                            lowerCard.querySelector('.card-begin-date').textContent = 'Début: ' + month[startDate.getMonth()] + ' ' + startDate.getFullYear();

                            // job description
                            lowerCard.querySelector('.card-description').textContent = iterator.about;

                            // job requirements

                            if (iterator.studyLevel == 5) {
                                lowerCard.querySelector('.card-study-requirement').textContent = 'Bac';
                            } else if (iterator.studyLevel == 6) {
                                lowerCard.querySelector('.card-study-requirement').textContent = 'Bac + 2';
                            } else if (iterator.studyLevel == 7) {
                                lowerCard.querySelector('.card-study-requirement').textContent = 'Bac + 3';
                            } else if (iterator.studyLevel == 8) {
                                lowerCard.querySelector('.card-study-requirement').textContent = 'Bac + 5';
                            }

                            lowerCard.querySelector('.try-it').setAttribute('href', "mailto:" + iterator.applyMail);

                            let container = document.querySelector('.cards-container');

                            container.appendChild(lowerCard);
                        }
                    }
                }).then(
                function () {
                    const allLowerCard = document.querySelectorAll('.lower-card-content');
                    allLowerCard.forEach(element => {
                        element.addEventListener('click', function () {
                            element.classList.toggle('hide');
                            const parentElement = element.parentNode;
                            parentElement.querySelector('.deployed-card').classList.toggle('hide');
                        });
                    });

                    const allDeployedCard = document.querySelectorAll('.deployed-card');
                    allDeployedCard.forEach(element => {

                        element.querySelector('.undeploy-button').addEventListener('click', function () {
                            element.classList.toggle('hide');
                            const parentElement = element.parentNode;
                            parentElement.querySelector('.lower-card-content').classList.toggle('hide');
                        });
                    });


                }
            ).then(function () {



                const allFilter = document.querySelectorAll('.filtered-content');

                let modeFilter = [];
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
                //display card with filter corresponding
                if (modeFilter.length > 0) {
                    for (const card of allLowerCard) {
                        card.style.display = 'none';
                        for (const modeIterator of modeFilter) {
                            if (card.querySelector('.job-info-button').textContent == modeIterator.querySelector('.working-mode p').textContent) {
                                card.style.display = 'flex';
                            }
                        }
                    }
                }

                if (contractFilter.length > 0) {
                    for (const card of allLowerCard) {
                        card.style.display = 'none';
                        for (const contractIterator of contractFilter) {
                            if (card.querySelector('.ctType').textContent == contractIterator.querySelector('.working-duration p').textContent) {
                                card.style.display = 'flex';
                            }
                        }
                    }
                }

                if (posteFilter.length > 0) {
                    for (const card of allLowerCard) {
                        card.style.display = 'none';
                        for (const postIterator of posteFilter) {
                            if (card.querySelector('.job-info-label').textContent == postIterator.querySelector('.filtered-content p').textContent) {
                                card.style.display = 'flex';
                            }
                        }
                    }
                }

                if (contractFilter.length > 0 && posteFilter.length > 0) {
                    for (const card of allLowerCard) {
                        card.style.display = 'none';
                        for (const contractIterator of contractFilter) {
                            if (card.querySelector('.ctType').textContent == contractIterator.querySelector('.working-duration p').textContent) {
                                for (const postIterator of posteFilter) {
                                    if (card.querySelector('.job-info-label').textContent == postIterator.querySelector('.filtered-content p').textContent) {
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
                        for (const modeIterator of modeFilter) {
                            if (card.querySelector('.job-info-button').textContent == modeIterator.querySelector('.working-mode p').textContent) {
                                for (const postIterator of posteFilter) {
                                    if (card.querySelector('.job-info-label').textContent == postIterator.querySelector('.filtered-content p').textContent) {
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
                        for (const modeIterator of modeFilter) {
                            if (card.querySelector('.job-info-button').textContent == modeIterator.querySelector('.working-mode p').textContent) {
                                for (const contractIterator of contractFilter) {
                                    if (card.querySelector('.ctType').textContent == contractIterator.querySelector('.working-duration p').textContent) {
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
                        for (const modeIterator of modeFilter) {
                            if (card.querySelector('.job-info-button').textContent == modeIterator.querySelector('.working-mode p').textContent) {
                                for (const contractIterator of contractFilter) {
                                    if (card.querySelector('.ctType').textContent == contractIterator.querySelector('.working-duration p').textContent) {
                                        for (const postIterator of posteFilter) {
                                            if (card.querySelector('.job-info-label').textContent == postIterator.querySelector('.filtered-content p').textContent) {
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
            })


    },
    //*********************************************************************************************************************** */
    //* For data or salary filter I need to reload data from the loader.
    //* Depending the activated one the load will be different.
    //*********************************************************************************************************************** */
    filterBy: function () {

        const filterBy = document.querySelectorAll('#dropdown-date p');
        for (const filter of filterBy) {
            filter.addEventListener('click', deploy.handleFilter);
        }
    },

    handleFilter: function (evt) {
        document.getElementById('current-filter').textContent = evt.target.textContent;
        const filterBy = document.querySelectorAll('#dropdown-date p');
        for (const filter of filterBy) {
            filter.classList.remove('dropdown-content-date-active');
        }
        evt.target.classList.add('dropdown-content-date-active');
        deploy.deploy();
    },

    //*-------------------------
}