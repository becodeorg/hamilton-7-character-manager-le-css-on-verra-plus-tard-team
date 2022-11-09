import './../../style.css'
import { divConstructor } from "./constructorDOM" 
import { goFetchAllAsync, goFetchOneAsync } from "./apiRequests"
import axios from "axios"

const singleCharacter = async() =>{
    const urlParams = new URLSearchParams(window.location.search);
    const idValue = urlParams.get('id');
    console.log(idValue);

    let character = await goFetchOneAsync(idValue);
    divConstructor(character);
    let divContainer = document.querySelector("#cardContainer");
    let newAMod = document.createElement("a");
    let newABack = document.createElement("a");
    newAMod.textContent = "Modify Character";
    newAMod.href = `../htmlPages/modifyCharacter.html?id=${idValue}`;
    newABack.textContent = "BACK";
    newABack.href = "../../index.html"
    divContainer.firstChild.appendChild(newAMod);
    divContainer.firstChild.appendChild(newABack);
}

singleCharacter();
