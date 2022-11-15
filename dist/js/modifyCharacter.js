import './../../style.css'
import { goFetchOneAsync, modCharAsync } from "./apiRequests"


const modifyCharacter = async() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idValue = urlParams.get('id');
    let character = await goFetchOneAsync(idValue);
    let previewImg = document.createElement("img");
    previewImg.src = `data:image/gif;base64,${character.image}`;
    const imgInput = document.querySelector("#image");
    let image = imgInput.addEventListener('change', () => {
        console.log(imgInput.files);
        const preview = document.querySelector("#preview");
        while(preview.firstChild){
            preview.removeChild(preview.firstChild);
        }
        let newImgURL = imgInput.files[0];
        let newImg = document.createElement("img");
        newImg.src = URL.createObjectURL(newImgURL);
        preview.appendChild(newImg);
        let reader = new FileReader();
        reader.onloadend = () => {
            console.log(reader.result);
            image = reader.result.replace('data:', '').replace(/^.+,/, '');
            previewImg.src = `data:image/gif;base64,${image}`;
        };
        reader.readAsDataURL(newImgURL);
    });
    console.log(previewImg.src.replace('data:', '').replace(/^.+,/, ''));
    document.querySelector("#description").textContent = character.description;
    document.querySelector("#shortDescription").placeholder = character.shortDescription;
    document.querySelector("#name").placeholder = character.name;
    document.querySelector("#preview").appendChild(previewImg);
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
            image : previewImg.src.replace('data:', '').replace(/^.+,/, '')
        }
        let response = await modCharAsync(idValue, jsonLetter);
        console.log(response);
        document.location.href = `../htmlPages/singleCharacter.html?id=${idValue}`;
    })
}

modifyCharacter();

