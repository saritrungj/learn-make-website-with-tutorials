const backtotopBtn = document.getElementById('back-to-top-btn')

function scrollFunction() {
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backtotopBtn.style.display = 'block'
  } else {
    backtotopBtn.style.display = 'none'
  }
}

window.onscroll = () => {
  scrollFunction();
}

function backTotop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}