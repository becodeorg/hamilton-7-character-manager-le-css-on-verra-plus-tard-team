import './../../style.css'
import { divConstructor } from "./constructorDOM" 
import { goFetchAllAsync, goFetchOneAsync, modCharAsync } from "./apiRequests"
import axios from "axios"

const urlParams = new URLSearchParams(window.location.search);
const idValue = urlParams.get('id');
let character = async() => {
    await goFetchOneAsync(idValue);
}
document.querySelector("#description").textContent = character.description;
document.querySelector("#shortDescription").placeholder = character.shortDescription;
document.querySelector("#name").placeholder = character.name;
document.querySelector("#urlImg").textContent = character.image;

let modifyCharBtn = document.querySelector("#modBtn");
modifyCharBtn.addEventListener("click",async () => {
    
    let shortDesc = "";
    let charName = "";
    if(document.querySelector("#shortDescription").value === ""){
        shortDesc = document.querySelector("#shortDescription").placeholder;
    }else{
        shortDesc = document.querySelector("#shortDescription").value;
    }
    if(document.querySelector("#name").value === ""){
        charName = document.querySelector("#name").placeholder;
    }else{
        charName = document.querySelector("#name").value;
    }
    let jsonLetter = {
        description: document.querySelector("#description").value,
        shortDescription: shortDesc,
        name: charName,
        image : document.querySelector("#urlImg").value
    }
    let response = await modCharAsync(idValue, jsonLetter);
    console.log(response);
    document.location.href = `../htmlPages/singleCharacter.html?id=${idValue}`;
})