let menuItem =Array.from(document.getElementsByClassName("coffe-menu-item")) ;
let modalWindow = document.querySelector(".container_preview")
menuItem.map(element => {
   element.addEventListener("click", ()=>{
    setContent(element);

    setVisible();
   } )
    
});
let closeBtn = document.querySelector(".order-close-btn");

closeBtn.addEventListener("click",()=>{
    setVisible();
})

function setVisible() {
    modalWindow.classList.toggle("set-visible");
    
}

function setContent(elem) {
    let imgSrc = elem.querySelector("img").src;
    let contentArr = elem.querySelectorAll("p");
    modalWindow.querySelector("img").src = imgSrc;
    let setContArr = modalWindow.querySelectorAll('p');
    setContArr[0].innerText = contentArr[0].innerText;
    setContArr[1].innerHTML = contentArr[1].innerText;
    setContArr[5].innerHTML = contentArr[2].innerText;
}