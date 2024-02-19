function handleLoginPage() {
const usernameElemment = document.querySelector('.js-input-username');
const passwordElemment = document.querySelector('.js-input-password');

username = md5(usernameElemment.value) 
password = md5(passwordElemment.value)

if (username === md5('admin') && password === md5('admin')) {
  alert(`Login Success!, You're Welcome.`);
  usernameElemment.value = '';
  passwordElemment.value = '';
}
}