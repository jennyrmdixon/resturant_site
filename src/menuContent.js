import image1 from './picture_1.jpg';
import image2 from './picture_2.jpg';
import image3 from './picture_3.jpg';
import image4 from './picture_4.jpg';
import image5 from './picture_5.jpg';
import image6 from './picture_6.jpg';

export default function addMenuContent (){
    
  const body = document.body;

  
  /*Menu*/

  const menuContent = document.createElement('div');
  menuContent.setAttribute('id', 'menuContent'); 
  menuContent.setAttribute('class', 'hidden'); 
  content.appendChild(menuContent);

  const heroHeading2 = document.createElement('h1');
  heroHeading2.textContent="Our Menu";
  menuContent.appendChild(heroHeading2);

  const menuItems = document.createElement('div');
  menuItems.setAttribute('id', 'menuItemsArea'); 
  menuContent.appendChild(menuItems);

  const menuItemsContainer = document.createElement('div');
  menuItemsContainer.setAttribute('id', 'menuItemsContainer'); 
  menuItems.appendChild(menuItemsContainer);



  const menuItem1 = document.createElement('div');
  menuItem1.setAttribute('class', 'menuItems'); 
  menuItemsContainer.appendChild(menuItem1);

  const menuItem1Image = document.createElement('img');
  menuItem1Image.src = image1;
  menuItem1.appendChild(menuItem1Image);

  const menuItem1TextArea = document.createElement('div');
  menuItem1.appendChild(menuItem1TextArea);

  const menuItem1Heading = document.createElement('h3');  
  menuItem1Heading.textContent="Food 1";
  menuItem1TextArea.appendChild(menuItem1Heading);

  const menuItem1Text = document.createElement('p');
  menuItem1Text.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem1TextArea.appendChild(menuItem1Text);

  const menuItem4Image = document.createElement('img');
  menuItem4Image.src = image4;
  menuItem1.appendChild(menuItem4Image);

  const menuItem4TextArea = document.createElement('div');
  menuItem1.appendChild(menuItem4TextArea);

  const menuItem4Heading = document.createElement('h3');  
  menuItem4Heading.textContent="Food 4";
  menuItem4TextArea.appendChild(menuItem4Heading);

  const menuItem4Text = document.createElement('p');
  menuItem4Text.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem4TextArea.appendChild(menuItem4Text);





  const menuItem2 = document.createElement('div');
  menuItem2.setAttribute('class', 'menuItems'); 
  menuItemsContainer.appendChild(menuItem2);

  const menuItem2Image = document.createElement('img');
  menuItem2Image.src = image2;
  menuItem2.appendChild(menuItem2Image);

  const menuItem2TextArea = document.createElement('div');
  menuItem2.appendChild(menuItem2TextArea);
  
  const menuItem2Heading = document.createElement('h3');  
  menuItem2Heading.textContent="Food 2";
  menuItem2TextArea.appendChild(menuItem2Heading);

  const menuItem2Text = document.createElement('p');
  menuItem2Text.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem2TextArea.appendChild(menuItem2Text);

  const menuItem5Image = document.createElement('img');
  menuItem5Image.src = image5;
  menuItem2.appendChild(menuItem5Image);

  const menuItem5TextArea = document.createElement('div');
  menuItem2.appendChild(menuItem5TextArea);
  
  const menuItem5Heading = document.createElement('h3');  
  menuItem5Heading.textContent="Food 5";
  menuItem5TextArea.appendChild(menuItem5Heading);

  const menuItem5Text = document.createElement('p');
  menuItem5Text.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem5TextArea.appendChild(menuItem5Text);




  const menuItem3 = document.createElement('div');
  menuItem3.setAttribute('class', 'menuItems'); 
  menuItemsContainer.appendChild(menuItem3);

  const menuItem3Image = document.createElement('img');
  menuItem3Image.src = image3;
  menuItem3.appendChild(menuItem3Image);

  const menuItem3TextArea = document.createElement('div');
  menuItem3.appendChild(menuItem3TextArea);

  const menuItem3Heading = document.createElement('h3');  
  menuItem3Heading.textContent="Food 3";
  menuItem3TextArea.appendChild(menuItem3Heading);

  const menuItem3Text = document.createElement('p');
  menuItem3Text.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem3TextArea.appendChild(menuItem3Text);

  const menuItem6Image = document.createElement('img');
  menuItem6Image.src = image6;
  menuItem3.appendChild(menuItem6Image);

  const menuItem6TextArea = document.createElement('div');
  menuItem3.appendChild(menuItem6TextArea);

  const menuItem6Heading = document.createElement('h3');  
  menuItem6Heading.textContent="Food 6";
  menuItem6TextArea.appendChild(menuItem6Heading);

  const menuItem6Text = document.createElement('p');
  menuItem6Text.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem6TextArea.appendChild(menuItem6Text);


}
 