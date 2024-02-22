function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-[#1DD100]") ;

}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("bg-[#1DD100]");
}