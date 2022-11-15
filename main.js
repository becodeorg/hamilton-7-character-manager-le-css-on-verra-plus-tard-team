import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { divConstructor } from "./public/js/constructorDOM" 
import { goFetchAllAsync } from "./public/js/apiRequests"
import axios from "axios"

function characterSearch() {
  let input = document.getElementById("search");
  let name = "";
  let searchWord = input.value.toUpperCase();
  let cardContainer = document.getElementById("cardContainer");
  let cards = cardContainer.querySelectorAll("#card");
  for (let i = 0; i < cards.length; i++) {
    let nameTag = cards[i].querySelector("h2");
    console.log(nameTag.innerText);
    name = nameTag.textContent || nameTag.innerText;
    console.log(name);
    if (name.toUpperCase().indexOf(searchWord) > -1) {
      cards[i].style.display = "";
    }else{
      cards[i].style.display = "none";
    }
  }

}

const justGiveMeAFreakingFunctionSiVouPlait = async() =>{
  let charList = await goFetchAllAsync();

  for (const iterator of charList) {
    divConstructor(iterator);
  }
  
}


justGiveMeAFreakingFunctionSiVouPlait()
document.getElementById("search").addEventListener("keyup", characterSearch);