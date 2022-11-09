import { goFetchAllAsync, goFetchOneAsync, sendLetterAsync } from "./apiRequests"
import axios from "axios"

let createCharBtn = document.querySelector("#createBtn");
createCharBtn.addEventListener("click",async () => {
    let jsonLetter = {
        description: document.querySelector("#description").value,
        shortDescription: document.querySelector("#shortDescription").value,
        name: document.querySelector("#name").value,
        image : document.querySelector("#urlImg").value
    }
    let response = await sendLetterAsync(jsonLetter);
    console.log(response.id);
    document.location.href = `../htmlPages/singleCharacter.html?id=${response.id}`;
})