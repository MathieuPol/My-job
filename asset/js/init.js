 // On after html loading, execute the function 
 const init  = {
    init: function() {
        deploy.init();
        filter.init();
    }
}
document.addEventListener('DOMContentLoaded', init.init());