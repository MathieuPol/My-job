fetch("./data.json")
.then(response => {
   return response.json();
})
.then(
    function(data) {
        console.log(data[0]['uuid'])
        let html = "";
        data.forEach(function(item) {
            html += `<div class="item">
                        <h2>${item.title}</h2>
                        <p>${item.description}</p>
                        <img src="${item.image}">
                    </div>`;
        });

    }
    /* jsondata => console.log(jsondata) */
    );