import{d as m}from"./apiRequests.6cdff860.js";function h(t){let r=document.querySelector("#cardContainer"),e=document.createElement("div"),n=document.createElement("div"),l=document.createElement("h2"),o=document.createElement("p"),d=document.createElement("a"),i=document.createElement("img"),a=document.createElement("button");a.textContent="DELETE",i.src=`data:image/gif;base64,${t.image}`,l.textContent=t.name,o.textContent=t.description,d.textContent="See Character",d.href=`../public/htmlPages/singleCharacter.html?id=${t.id}`,d.target="_blank",e.id="card",n.id="cardBtns",e.classList.add("font-marvel","flex","flex-col","bg-slate-900","rounded","p-5","shadow-lg","shadow-cyan-700"),i.classList.add("h-24","m-1.5","max-w-min","mr-auto","ml-auto","shadow-xl","shadow-cyan-700","rounded-full"),l.classList.add("m-2","mt-5","text-left","text-white"),o.classList.add("m-2","h-28","text-white","text-ellipsis","overflow-hidden","..."),d.classList.add("animate-bounce","w-2/4","m-2","mt-5","text-center","bg-gradient-to-r","from-green-500","to-blue-500","hover:from-pink-500","hover:to-yellow-500","text-white","rounded-lg"),a.classList.add("animate-bounce","w-1/4","m-2","mt-5","text-center","bg-gradient-to-r","from-red-600","to-red-900","hover:from-orange-600","hover:to-black","text-white","rounded-lg"),n.classList.add("flex","flex-row","justify-between"),e.appendChild(i),e.appendChild(l),e.appendChild(o),n.appendChild(d),n.appendChild(a),e.appendChild(n),r.appendChild(e),a.addEventListener("click",async()=>{confirm("Want to delete?")&&(await m(t.id),e.remove(),document.location.href="../../index.html")})}export{h as d};
