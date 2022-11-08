

export function divConstructor(character) {
    let divContainer = document.querySelector("#cardContainer");
    let newDiv = document.createElement("div");
    let newH = document.createElement("h2");
    let newDesc = document.createElement("p");
    let newA = document.createElement("a");
    let newImg = document.createElement("img");
    newImg.src = `data:image/gif;base64,${character.image}`;
    newH.textContent = character.name;
    newDesc.textContent = character.description;
    newA.textContent = "See Character";
    newA.href = "./public/htmlPages/singleCharacter.html?id="+character.id;
    newA.target = "_blank";
    newDiv.appendChild(newImg);
    newDiv.appendChild(newH);
    newDiv.appendChild(newDesc);
    newDiv.appendChild(newA);
    divContainer.appendChild(newDiv);
  }
  