export default function writePageContent (){

  console.log ("Content script start.");
  
  const body = document.body;

  const nav = document.createElement('div');
  nav.setAttribute('id', 'nav'); 
  body.appendChild(nav);

  const navButtonHome = document.createElement('button');
  navButtonHome.textContent="Home";
  nav.appendChild(navButtonHome);

  const icon = document.createElement('i');
  icon.className += "fa-brands fa-space-awesome";
  nav.appendChild(icon);

  const navButtonMenu = document.createElement('button');
  navButtonMenu.textContent="Menu";
  nav.appendChild(navButtonMenu);

  const content = document.createElement('div');
  content.setAttribute('id', 'content'); 
  body.appendChild(content);
  
  const heroDiv = document.createElement('div');
  heroDiv.setAttribute('id', 'hero'); 
  content.appendChild(heroDiv);
  
  const heroHeading = document.createElement('h1');
  heroHeading.textContent="Welcome to Cosmic Corner";
  heroDiv.appendChild(heroHeading);

  const infoDiv = document.createElement('div');
  infoDiv.setAttribute('id', 'info'); 
  content.appendChild(infoDiv);

  const aboutSection = document.createElement('div');
  aboutSection.setAttribute('id', 'description'); 
  infoDiv.appendChild(aboutSection);

  const aboutTextHeading = document.createElement('h3');
  aboutTextHeading.textContent="Unique Food";
  aboutSection.appendChild(aboutTextHeading);

  const aboutTextContent = document.createElement('p');
  aboutTextContent.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  aboutSection.appendChild(aboutTextContent);

  const contactSection = document.createElement('div');
  contactSection.setAttribute('id', 'contact'); 
  infoDiv.appendChild(contactSection);

  const contactSectionHeading = document.createElement('h3');
  contactSectionHeading.textContent="Contact Us";
  contactSection.appendChild(contactSectionHeading);

  const contactSectionPhone = document.createElement('p');
  contactSectionPhone.textContent="Phone: 760-232-2342";
  contactSection.appendChild(contactSectionPhone);

  const contactSectionEmail = document.createElement('p');
  contactSectionEmail.textContent="Email: hello@cosmiccafe.com";
  contactSection.appendChild(contactSectionEmail);

  const contactSectionAddress1 = document.createElement('p');
  contactSectionAddress1.textContent="323 Lunar Way";
  contactSection.appendChild(contactSectionAddress1);

  const contactSectionAddressbr1 = document.createElement('br');
  contactSection.appendChild(contactSectionAddressbr1);

  const contactSectionAddress2 = document.createElement('p');
  contactSectionAddress2.textContent="393853 AZ";
  contactSection.appendChild(contactSectionAddress2);

}




 