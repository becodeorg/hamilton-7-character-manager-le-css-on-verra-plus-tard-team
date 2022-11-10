import './../../style.css'
import { divConstructor } from "./constructorDOM" 
import { goFetchOneAsync } from "./apiRequests"

const singleCharacter = async() =>{
    const urlParams = new URLSearchParams(window.location.search);
    const idValue = urlParams.get('id');
    console.log(idValue);

    let character = await goFetchOneAsync(idValue);
    divConstructor(character);
    let divContainer = document.querySelector("#cardContainer");
    let newABack = document.querySelector("a");
    let newAMod = document.createElement("a");
    newAMod.textContent = "Modify Character";
    newAMod.href = `../htmlPages/modifyCharacter.html?id=${idValue}`;
    newABack.textContent = "BACK";
    newABack.target = "";
    newABack.href = "../../index.html"
    divContainer.firstChild.appendChild(newAMod);
}

singleCharacter();
