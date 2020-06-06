const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const closeFile = document.querySelector("#modal .header a")

buttonSearch.addEventListener("click", ()=>{
    modal.classList.remove("hide")

})

closeFile.addEventListener("click", ()=>{
    modal.classList.add("hide")
})