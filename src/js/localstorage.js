const refs = {
  changeTheme: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.changeTheme.addEventListener('change', handleTheme);

const currentTheme = localStorage.getItem('theme');
refs.body.classList.add(currentTheme);

function handleTheme(event) {
  event.preventDefault();

  if (currentTheme === 'light-theme') {
    refs.body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    refs.changeTheme.setAttribute('checked', 'true');
  } else {
    refs.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light-theme');
    refs.changeTheme.removeAttribute('checked');
  }
}

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// localStorage.setItem('Theme', JSON.stringify(Theme));

// console.log(localStorage.getItem('Theme'));
