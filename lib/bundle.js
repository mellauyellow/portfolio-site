/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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
	    let firstSection = document.getElementById('projects');
	
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
	
	const projectItems = [
	  {title: 'Onward', photoUrl: 'https://res.cloudinary.com/mellauyellow/image/upload/c_fit,h_450,w_350/v1484167353/Screen_Shot_2017-01-11_at_12.39.33_PM_kvqp39.png', technologies: ['Rails', 'PostgreSQL', 'JavaScript', 'React.js', 'Redux'], description: 'Neighborhood search and comparison site for people relocating to new regions.'},
	  {title: 'Matrixgram', photoUrl: 'https://res.cloudinary.com/mellauyellow/image/upload/c_fit,h_450,w_350/v1484167353/Screen_Shot_2017-01-11_at_12.41.58_PM_zyvikr.png', technologies: ['JavaScript', 'jQuery'], description: 'Image editor using convolution matrices to apply filters.'}
	];
	
	const addProjectItems = function() {
	  let section = document.getElementById('project-thumbnails');
	
	  projectItems.forEach(project => {
	    let fullThumbnail = document.createElement('div');
	    fullThumbnail.className = 'thumbnail-background';
	    let projectThumbnail = document.createElement('div');
	    projectThumbnail.className = 'project-screenshot';
	    projectThumbnail.style.backgroundImage = `url('${project.photoUrl}')`;
	
	    fullThumbnail.append(projectThumbnail);
	    section.append(fullThumbnail);
	  });
	};


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map