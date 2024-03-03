import interior from "./interior.jpg";

export default function addHomeContent() {
  const body = document.body;

  const homeContent = document.createElement("div");
  homeContent.setAttribute("id", "homeContent");
  content.appendChild(homeContent);

  const heroDiv = document.createElement("div");
  heroDiv.setAttribute("id", "hero");
  homeContent.appendChild(heroDiv);

  const heroHeading = document.createElement("h1");
  heroHeading.textContent = "Welcome to Cosmic Corner";
  heroDiv.appendChild(heroHeading);

  const infoArea = document.createElement("div");
  infoArea.setAttribute("id", "infoArea");
  homeContent.appendChild(infoArea);

  const infoContainer = document.createElement("div");
  infoContainer.setAttribute("id", "infoContainer");
  infoArea.appendChild(infoContainer);

  const infoDiv = document.createElement("div");
  infoDiv.setAttribute("id", "info");
  infoContainer.appendChild(infoDiv);

  const aboutSection = document.createElement("div");
  aboutSection.setAttribute("id", "description");
  infoDiv.appendChild(aboutSection);

  const aboutTextHeading = document.createElement("h3");
  aboutTextHeading.textContent = "Food of the Future";
  aboutSection.appendChild(aboutTextHeading);

  const aboutTextContent = document.createElement("p");
  aboutTextContent.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es.";
  aboutSection.appendChild(aboutTextContent);

  const aboutImage = document.createElement("img");
  aboutImage.src = interior;
  infoDiv.appendChild(aboutImage);
}
