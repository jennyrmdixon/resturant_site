import headerFooterContent from './headerFooterContent.js';
import addhomeContent from './homeContent.js';
import addmenuContent from './menuContent.js';

import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


 headerFooterContent();
 addhomeContent();


function clearContent() {
  const contentDiv = document.getElementById("content");
  let currentContent = contentDiv.firstChild;
  contentDiv.removeChild(currentContent); 
};
 
 /*Event Listeners*/
  let homeButton = document.getElementById("homeButton");
    homeButton.addEventListener('click', () => {
    clearContent();  
    addhomeContent();
  });


  let menuButton = document.getElementById("menuButton");
  menuButton.addEventListener('click', () => {
  clearContent();    
  addmenuContent();
});

  //   pageContent.navButtonHome.addEventListener('click', () => {
  //   homeContent.classList.remove("hidden");
  //   menuContent.classList.add("hidden")

  // });

  // navButtonMenu.addEventListener('click', () => {
  //   homeContent.classList.add("hidden");
  //   menuContent.classList.remove("hidden")

  // });

  