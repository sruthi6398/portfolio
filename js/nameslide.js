const items = [' Sruthi Kakumanu.', ' a Web Developer.', ' a Designer.', 'a Freelancer.'];
   
const tyEl = document.getElementById('typed');

tyEl.textContent = "";
let currentItemIndex = 1;

function displayNextItem() {

    tyEl.textContent = items[currentItemIndex];

    currentItemIndex++;

    if (currentItemIndex < items.length) {
        setTimeout(displayNextItem, 3000);
    } else {
        currentItemIndex = 0;
        setTimeout(displayNextItem, 3000);
    }
}

displayNextItem();
console.log(divEl)
