document.addEventListener('DOMContentLoaded', () => {
  splashSetup();
  addClickHandlers();
  addProjectItems();
});


const splashSetup = function() {
  let splashImage = document.getElementById('splash-image');
  let splashTransparency = document.getElementById('splash-transparency');

  splashImage.style.height = `${window.innerHeight}px`;
  splashTransparency.style.height = `${window.innerHeight}px`;

  let arrow = document.createElement('img');
  arrow.src = 'http://res.cloudinary.com/mellauyellow/image/upload/v1484083378/down-arrow-in-small-circle_1_wsvvzv.png';
  arrow.className = "down-arrow";
  splashImage.append(arrow);


  window.addEventListener('scroll', scrollListener(arrow));
};

const scrollListener = function(arrow) {
  return (e) => {
    arrow.style.bottom = `${scrollY + 30}px`;
    let header = document.getElementById('header');
    let firstSection = document.getElementsByClassName('projects')[0];

    if (scrollY > window.innerHeight) {
      header.className = 'fixed';
      firstSection.style.marginTop = '160px';
    } else {
      header.className = '';
      firstSection.style.marginTop = '100px';
    }
  };
};

const addClickHandlers = function() {

};

const projectItems = {
  fullstack: 'https://res.cloudinary.com/mellauyellow/image/upload/c_fit,h_450,w_350/v1484167353/Screen_Shot_2017-01-11_at_12.39.33_PM_kvqp39.png',
  javascript: 'https://res.cloudinary.com/mellauyellow/image/upload/c_fit,h_450,w_350/v1484167353/Screen_Shot_2017-01-11_at_12.41.58_PM_zyvikr.png'
};

const projectItems = [
  {title: 'Onward', photo_url: 'https://res.cloudinary.com/mellauyellow/image/upload/c_fit,h_450,w_350/v1484167353/Screen_Shot_2017-01-11_at_12.39.33_PM_kvqp39.png', technologies: ['Rails', 'PostgreSQL', 'JavaScript', 'React.js', 'Redux'], description: ''},
  {title: 'Onward', photo_url: 'https://res.cloudinary.com/mellauyellow/image/upload/c_fit,h_450,w_350/v1484167353/Screen_Shot_2017-01-11_at_12.39.33_PM_kvqp39.png', technologies: ['Rails', 'PostgreSQL', 'JavaScript', 'React.js', 'Redux'], description: ''}
];

const addProjectItems = function() {

};
