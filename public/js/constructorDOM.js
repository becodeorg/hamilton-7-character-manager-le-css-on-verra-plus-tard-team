import { goFetchAllAsync, goFetchOneAsync, sendLetterAsync, delCharAsync } from "./apiRequests"

export function divConstructor(character) {
    let divContainer = document.querySelector("#cardContainer");
    let newDiv = document.createElement("div");
    let newH = document.createElement("h2");
    let newDesc = document.createElement("p");
    let newA = document.createElement("a");
    //let newAMod = document.createElement("a");
    let newImg = document.createElement("img");
    let newDelBtn = document.createElement("button");
    newDelBtn.textContent = "DELETE"
    newImg.src = `data:image/gif;base64,${character.image}`;
    newH.textContent = character.name;
    newDesc.textContent = character.description;
    newA.textContent = "See Character";
    newA.href = `../htmlPages/singleCharacter.html?id=${character.id}`;
    newA.target = "_blank";
    // newAMod.textContent = "Modify Character";
    // newAMod.href = `http://127.0.0.1:5173/public/htmlPages/modifyCharacter.html?id=${character.id}`;
    // newAMod.target = "_blank";
    newDiv.appendChild(newImg);
    newDiv.appendChild(newH);
    newDiv.appendChild(newDesc);
    newDiv.appendChild(newA);
    newDiv.appendChild(newDelBtn);
    //newDiv.appendChild(newAMod);
    divContainer.appendChild(newDiv);
    newDelBtn.addEventListener("click", async () => {
      let result = confirm("Want to delete?");
      if (result) {
        await delCharAsync(character.id);
        newDiv.remove();
        document.location.href = `../../index.html`;
      }
    })
  }
  