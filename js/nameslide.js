const items = [' Sruthi Kakumanu.', ' a Web Developer.', ' a Designer.', 'a Freelancer.'];
   
const tyEl = document.getElementById('typed');
const nname=document.querySelector("#nname")

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

function nameLightEffect() {
 
    

    if(nname.classList.contains("cname")){
        nname.classList.remove("cname");
        nname.classList.add("wname");
        setTimeout(nameLightEffect, 500);
    }
    else{
        nname.classList.remove("wname");
        nname.classList.add("cname");
        setTimeout(nameLightEffect, 500);
    }
    
}

displayNextItem();
nameLightEffect();

const ctext = document.getElementById('ctext');
