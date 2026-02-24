const switcher = document.querySelector ('.btn');

switcher.addEventListener ('click', function () {
    document.body.classList.toggle ('tema-escuro');
    
    var className = document.body.className;
    if (className == ('tema-claro')) {
        this.textContent = 'Escuro';
    } else {
        this.textContent = 'Claro';
    }
    
    console.log('Current class name: ' + className);
});