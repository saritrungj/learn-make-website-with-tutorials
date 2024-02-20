function handleLoginPage() {

  const usernameElemment = document.querySelector('.js-input-username');
  const passwordElemment = document.querySelector('.js-input-password');
  const loginFormElement = document.querySelector('.js-validate-title');

  username = md5(usernameElemment.value)
  password = md5(passwordElemment.value)

  if (username === md5('admin') && password === md5('admin')) {
    alert(`Login Success!, You're Welcome.`);
    location.reload();
    usernameElemment.value = '';
    passwordElemment.value = '';
  } else {
    alert(`Username or password incorrect!`)
    usernameElemment.focus();
    usernameElemment.value = '';
    passwordElemment.value = '';
  }
}

document.body.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    handleLoginPage();
  }
});


