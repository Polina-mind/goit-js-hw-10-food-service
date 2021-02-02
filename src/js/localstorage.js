const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const currentTheme = localStorage.getItem('theme');
if (currentTheme === null) {
  localStorage.setItem('theme', 'light-theme');
  refs.body.classList.add('light-theme');
}

refs.checkbox.addEventListener('change', handleTheme);

function handleTheme(event) {
  event.preventDefault();

  if (currentTheme === 'light-theme') {
    refs.body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    return;
  }
  {
    // refs.checkbox.checked = true;
    refs.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light-theme');
    return;
  }
}

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// localStorage.setItem('Theme', JSON.stringify(Theme));

// console.log(localStorage.getItem('Theme'));
