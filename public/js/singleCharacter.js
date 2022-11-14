import './../../style.css'
import { divConstructor } from "./constructorDOM" 
import { goFetchOneAsync } from "./apiRequests"

const singleCharacter = async() =>{
    const urlParams = new URLSearchParams(window.location.search);
    const idValue = urlParams.get('id');
    console.log(idValue);

    let character = await goFetchOneAsync(idValue);
    divConstructor(character);
    let newABack = document.querySelector("a");
    let newAMod = document.createElement("a");
    newAMod.classList.add("animate-bounce", "w-fit", "p-2", "m-2", "mt-5", "text-center", "bg-gradient-to-r", "from-red-600", "to-red-900", "hover:from-orange-600", "hover:to-black", "text-white", "rounded-lg");
    newAMod.textContent = "Modify Character";
    newAMod.href = `../htmlPages/modifyCharacter.html?id=${idValue}`;
    newABack.textContent = "BACK";
    newABack.target = "";
    newABack.href = "../../index.html";
    let cardBtns = document.querySelector("#cardBtns");
    cardBtns.appendChild(newAMod);
    
}

singleCharacter();
