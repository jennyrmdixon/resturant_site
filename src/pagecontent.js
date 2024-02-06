export default function writePageContent (){

  console.log ("Content script start.");
  
  const body = document.body
  
  const header = document.createElement('div');
  header.setAttribute('id', 'header'); 
  body.appendChild(header);
  
  const headertext = document.createElement('p');
  headertext.textContent="Open 7 days a week 8AM - 8PM";
  header.appendChild(headertext);
  }
  
  