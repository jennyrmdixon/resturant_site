/*Fix section headings*/

import menuImage1 from "./menuItem1.jpg";
import menuImage2 from "./menuItem2.jpg";
import menuImage3 from "./menuItem3.jpg";
import menuImage4 from "./menuItem4.jpg";
import menuImage5 from "./menuItem5.jpg";
import menuImage6 from "./menuItem6.jpg";

export default function addMenuContent() {
  const body = document.body;

  /*Menu*/

  const menuContent = document.createElement("div");
  menuContent.setAttribute("id", "menuContent");
  menuContent.setAttribute("class", "hidden");
  content.appendChild(menuContent);

  const heroHeading2 = document.createElement("h1");
  heroHeading2.textContent = "Our Menu";
  menuContent.appendChild(heroHeading2);

  const menuItems = document.createElement("div");
  menuItems.setAttribute("id", "menuItemsArea");
  menuContent.appendChild(menuItems);

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.setAttribute("id", "menuItemsContainer");
  menuItems.appendChild(menuItemsContainer);

  /*Row 1*/

  const menuRow1 = document.createElement("div");
  menuRow1.setAttribute("class", "menuItems");
  menuItemsContainer.appendChild(menuRow1);

  const menuItem1Image = document.createElement("img");
  menuItem1Image.src = menuImage1;
  menuRow1.appendChild(menuItem1Image);

  const menuItem1TextArea = document.createElement("div");
  menuRow1.appendChild(menuItem1TextArea);

  const menuItem1Heading = document.createElement("h3");
  menuItem1Heading.textContent = "Food 1";
  menuItem1TextArea.appendChild(menuItem1Heading);

  const menuItem1Text = document.createElement("p");
  menuItem1Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem1TextArea.appendChild(menuItem1Text);

  const menuItem4Image = document.createElement("img");
  menuItem4Image.src = menuImage4;
  menuRow1.appendChild(menuItem4Image);

  const menuItem4TextArea = document.createElement("div");
  menuRow1.appendChild(menuItem4TextArea);

  const menuItem4Heading = document.createElement("h3");
  menuItem4Heading.textContent = "Food 4";
  menuItem4TextArea.appendChild(menuItem4Heading);

  const menuItem4Text = document.createElement("p");
  menuItem4Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem4TextArea.appendChild(menuItem4Text);

  /*Row 2*/

  const menuRow2 = document.createElement("div");
  menuRow2.setAttribute("class", "menuItems");
  menuItemsContainer.appendChild(menuRow2);

  const menuItem2Image = document.createElement("img");
  menuItem2Image.src = menuImage2;
  menuRow2.appendChild(menuItem2Image);

  const menuItem2TextArea = document.createElement("div");
  menuRow2.appendChild(menuItem2TextArea);

  const menuItem2Heading = document.createElement("h3");
  menuItem2Heading.textContent = "Food 2";
  menuItem2TextArea.appendChild(menuItem2Heading);

  const menuItem2Text = document.createElement("p");
  menuItem2Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem2TextArea.appendChild(menuItem2Text);

  const menuItem5Image = document.createElement("img");
  menuItem5Image.src = menuImage5;
  menuRow2.appendChild(menuItem5Image);

  const menuItem5TextArea = document.createElement("div");
  menuRow2.appendChild(menuItem5TextArea);

  const menuItem5Heading = document.createElement("h3");
  menuItem5Heading.textContent = "Food 5";
  menuItem5TextArea.appendChild(menuItem5Heading);

  const menuItem5Text = document.createElement("p");
  menuItem5Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem5TextArea.appendChild(menuItem5Text);

  /*Row 3*/

  const menuRow3 = document.createElement("div");
  menuRow3.setAttribute("class", "menuItems");
  menuItemsContainer.appendChild(menuRow3);

  const menuItem3Image = document.createElement("img");
  menuItem3Image.src = menuImage3;
  menuRow3.appendChild(menuItem3Image);

  const menuItem3TextArea = document.createElement("div");
  menuRow3.appendChild(menuItem3TextArea);

  const menuItem3Heading = document.createElement("h3");
  menuItem3Heading.textContent = "Food 3";
  menuItem3TextArea.appendChild(menuItem3Heading);

  const menuItem3Text = document.createElement("p");
  menuItem3Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem3TextArea.appendChild(menuItem3Text);

  const menuItem6Image = document.createElement("img");
  menuItem6Image.src = menuImage6;
  menuRow3.appendChild(menuItem6Image);

  const menuItem6TextArea = document.createElement("div");
  menuRow3.appendChild(menuItem6TextArea);

  const menuItem6Heading = document.createElement("h3");
  menuItem6Heading.textContent = "Food 6";
  menuItem6TextArea.appendChild(menuItem6Heading);

  const menuItem6Text = document.createElement("p");
  menuItem6Text.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do labore et dolore magna aliqua. Eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  menuItem6TextArea.appendChild(menuItem6Text);
}
