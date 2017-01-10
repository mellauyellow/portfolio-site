document.addEventListener('DOMContentLoaded', () => {
  splashSetup();
});


const splashSetup = function() {
  let splashImage = document.getElementById('splash-image');
  let splashTransparency = document.getElementById('splash-transparency');

  splashImage.style.height = `${window.innerHeight}px`;
  splashTransparency.style.height = `${window.innerHeight}px`;

  let arrow = document.createElement('img');
  arrow.src = 'http://res.cloudinary.com/mellauyellow/image/upload/v1484083378/down-arrow-in-small-circle_1_wsvvzv.png';
  arrow.className = "down-arrow";
  splashTransparency.append(arrow);
};
