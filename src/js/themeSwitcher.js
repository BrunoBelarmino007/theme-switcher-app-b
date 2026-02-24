function setupThemeSwitcher() {
  const switcher = document.querySelector('.btn');

  if (!switcher) return;

  switcher.addEventListener('click', function () {

    if (document.body.classList.contains('tema-claro')) {
      document.body.classList.remove('tema-claro');
      document.body.classList.add('tema-escuro');
      this.textContent = 'Claro';
    } else {
      document.body.classList.remove('tema-escuro');
      document.body.classList.add('tema-claro');
      this.textContent = 'Escuro';
    }

    console.log('Current class name: ' + document.body.className);
  });
}

window.setupThemeSwitcher = setupThemeSwitcher;
