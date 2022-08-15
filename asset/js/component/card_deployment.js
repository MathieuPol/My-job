const deploy = {
    init: function () {
        deploy.deploy();
    },

    deploy: function () {
        const cardDeployment = document.querySelectorAll('.cards-container');
        console.log(cardDeployment);
    }


}
document.addEventListener('DOMContentLoaded', deploy.init());