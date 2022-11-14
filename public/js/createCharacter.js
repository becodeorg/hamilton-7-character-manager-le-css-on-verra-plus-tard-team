import { sendLetterAsync } from "./apiRequests"

   
const imgInput = document.querySelector("#image");
let image = imgInput.addEventListener('change', () => {
  console.log(imgInput.files);
  const preview = document.querySelector("#preview");
  let newImgURL = imgInput.files[0];
  let newImg = document.createElement("img");
  newImg.src = URL.createObjectURL(newImgURL);
  preview.appendChild(newImg);
  let reader = new FileReader();
  reader.onloadend = () => {
    console.log(reader.result);
    image = reader.result.replace('data:', '').replace(/^.+,/, '');
  };
  reader.readAsDataURL(newImgURL);
});

let createCharBtn = document.querySelector("#createBtn");
createCharBtn.addEventListener("click",async () => {
    let jsonLetter = {
        description: document.querySelector("#description").value,
        shortDescription: document.querySelector("#shortDescription").value,
        name: document.querySelector("#name").value,
        image : image
    }
    let response = await sendLetterAsync(jsonLetter);
    console.log(response.id);
    document.location.href = `../htmlPages/singleCharacter.html?id=${response.id}`;
})