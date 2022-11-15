import { delCharAsync } from "./apiRequests"

export function divConstructor(character) {
    let divContainer = document.querySelector("#cardContainer");
    let newDiv = document.createElement("div");
    let btnDiv = document.createElement("div");
    let newH = document.createElement("h2");
    let newDesc = document.createElement("p");
    let newA = document.createElement("a");
    let newImg = document.createElement("img");
    let newDelBtn = document.createElement("button");
    newDelBtn.textContent = "DELETE"
    newImg.src = `data:image/gif;base64,${character.image}`;
    newH.textContent = character.name;
    newDesc.textContent = character.description;
    newA.textContent = "See Character";
    newA.href = `../public/htmlPages/singleCharacter.html?id=${character.id}`;
    newA.target = "_blank";
    newDiv.id = "card";
    btnDiv.id = "cardBtns";
    newDiv.classList.add("font-marvel", "flex", "flex-col", "bg-slate-900", "rounded", "p-5", "shadow-lg", "shadow-cyan-700");
    newImg.classList.add("h-24", "m-1.5", "max-w-min", "mr-auto", "ml-auto", "shadow-xl", "shadow-cyan-700", "rounded-full");
    newH.classList.add("m-2", "mt-5", "text-left", "text-white");
    newDesc.classList.add("m-2", "h-28", "text-white", "text-ellipsis", "overflow-hidden", "...");
    newA.classList.add("animate-bounce", "w-fit", "px-2", "py-1", "m-2", "mt-5", "text-center", "bg-gradient-to-r", "from-green-500", "to-blue-500", "hover:from-pink-500", "hover:to-yellow-500", "text-white", "rounded-lg");
    newDelBtn.classList.add("animate-bounce", "w-fit", "px-2", "py-1", "m-2", "mt-5", "text-center", "bg-gradient-to-r", "from-red-600", "to-red-900", "hover:from-orange-600", "hover:to-black", "text-white", "rounded-lg");
    btnDiv.classList.add("flex", "flex-row", "justify-around");
    newDiv.appendChild(newImg);
    newDiv.appendChild(newH);
    newDiv.appendChild(newDesc);
    btnDiv.appendChild(newA);
    btnDiv.appendChild(newDelBtn);
    newDiv.appendChild(btnDiv);
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
  