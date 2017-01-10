document.addEventListener('DOMContentLoaded', () => {
  console.log(window.innerHeight);
  splashSetup();
});


const splashSetup = function() {
  let splashImage = document.getElementById('splash-image');
  let splashTransparency = document.getElementById('splash-transparency');

  splashImage.style.height = `${window.innerHeight}px`;
  splashTransparency.style.height = `${window.innerHeight}px`;
};
