const text = document.querySelector('.second-text')

const loadingText = () => {
    setTimeout(() => {
      text.textContent = 'Developer';
    }, 0);
  };

  loadingText();
