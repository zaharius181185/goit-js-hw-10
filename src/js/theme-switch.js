const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.js-switch-input'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('click', switchHandler);
refs.switch.addEventListener('change', localStorageHandler);

function toggle() {
  refs.body.classList.toggle(Theme.DARK);
  refs.body.classList.toggle(Theme.LIGHT);
}

function switchHandler(e) {
  if (!darkThemeTurnedOn()) {
    turnOnLightTheme();
  } else {
    turnOnDarkTheme();
  }
}

function darkThemeTurnedOn() {
  return refs.switch.checked;
}

function turnOnLightTheme() {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
}

function turnOnDarkTheme() {
  refs.body.classList.add(Theme.DARK);
  refs.body.classList.remove(Theme.LIGHT);
}

function localStorageHandler(e) {
  const switchChecked = refs.switch.checked;

  if (switchChecked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function themeInLocalStorage() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.switch.checked = true;
  }
}

themeInLocalStorage();