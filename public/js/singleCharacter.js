import './../../style.css'
import { divConstructor } from "./constructorDOM" 
import { goFetchOneAsync } from "./apiRequests"

const singleCharacter = async() =>{
    const urlParams = new URLSearchParams(window.location.search);
    const idValue = urlParams.get('id');
    let character = await goFetchOneAsync(idValue);
    divConstructor(character);
    let newABack = document.querySelector("a");
    let newAMod = document.createElement("a");
    document.querySelector("p").classList.remove("h-28","text-ellipsis", "overflow-hidden", "...");
    let card = document.querySelector("#card");
    card.classList.add("justify-between", "items-center", "m-10");
    newAMod.classList.add("animate-bounce", "w-fit", "p-2", "m-2", "mt-5", "text-center","bg-gradient-to-r", "from-green-500", "to-blue-500", "hover:from-pink-500", "hover:to-yellow-500", "text-white", "rounded-lg");
    newAMod.textContent = "Modify Character";
    newAMod.href = `../htmlPages/modifyCharacter.html?id=${idValue}`;
    newABack.classList.remove("w-2/4");
    newABack.classList.add("w-fit", "p-2", "items-center");
    newABack.textContent = "BACK";
    newABack.target = "";
    newABack.href = "../../index.html";
    let cardBtns = document.querySelector("#cardBtns");
    cardBtns.classList.remove("justify-between");
    cardBtns.classList.add("w-full", "justify-center");
    cardBtns.appendChild(newAMod);
    
}

singleCharacter();
