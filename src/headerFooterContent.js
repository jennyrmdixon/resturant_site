export default function addheaderFooterContent() {
  const body = document.body;

  const nav = document.createElement("div");
  nav.setAttribute("id", "nav");
  body.appendChild(nav);

  /*Buttons*/
  const navButtonHome = document.createElement("button");
  navButtonHome.textContent = "Home";
  navButtonHome.setAttribute("id", "homeButton");
  nav.appendChild(navButtonHome);

  const icon = document.createElement("i");
  icon.className += "fa-brands fa-space-awesome";
  nav.appendChild(icon);

  const navButtonMenu = document.createElement("button");
  navButtonMenu.textContent = "Menu";
  navButtonMenu.setAttribute("id", "menuButton");
  nav.appendChild(navButtonMenu);

  const content = document.createElement("div");
  content.setAttribute("id", "content");
  body.appendChild(content);

  /*Footer*/
  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  body.appendChild(footer);

  const footerText = document.createElement("p");
  footerText.textContent =
    "760-232-2342 • hello@cosmiccafe.com  • 323 Lunar Way, Somewhere, AZ 23567";
  footer.appendChild(footerText);

  const footerFinePrintLink = document.createElement("a");
  footer.appendChild(footerFinePrintLink);

  const footerFinePrint = document.createElement("p");
  footerFinePrint.setAttribute("id", "finePrint");
  footerFinePrint.textContent = "Images from Pexels.com";
  footerFinePrintLink.appendChild(footerFinePrint);
}
