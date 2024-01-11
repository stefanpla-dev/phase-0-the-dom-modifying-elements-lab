// Write your code here!
const mainElement = document.querySelector('main#main');

if (mainElement) {
  mainElement.remove();
}

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", 'victory');
newHeader.innerHTML="STEFAN is the champion";