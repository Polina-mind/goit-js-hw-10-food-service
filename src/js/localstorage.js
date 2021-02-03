const refs = {
  changeTheme: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.changeTheme.addEventListener('change', handleTheme);

refs.body.classList.add(localStorage.getItem('theme'));

function handleTheme(event) {
  event.preventDefault();

  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'light-theme') {
    refs.body.classList.replace(`${currentTheme}`, 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    refs.changeTheme.setAttribute('checked', 'true');
    console.log(localStorage);
  } else {
    refs.body.classList.replace(`${currentTheme}`, 'light-theme');
    localStorage.setItem('theme', 'light-theme');
    refs.changeTheme.setAttribute('checked', 'false');
    console.log(localStorage);
  }
}

//Вариант 2

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));

// console.log(localStorage.getItem('Theme'));
