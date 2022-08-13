fetch("./data.json")
.then(response => {
   return response.json();
})
.then(
    function(data) {
        for (const iterator of data) {
            if (iterator.isActive == true) {
                console.log(iterator.contractType);

                const lowerCard = document.getElementById('lower-card').content.cloneNode(true);
                lowerCard.querySelector('.ctType').textContent = iterator.contractType;
                console.log(lowerCard);
                let container = document.querySelector('.cards-container');
                container.appendChild(lowerCard);
                //ocument.querySelector('.card-container').append(lowerCard);
            }
        }

    }
    /* jsondata => console.log(jsondata) */
    );