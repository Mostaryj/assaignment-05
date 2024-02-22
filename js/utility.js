function getElementByValueId(elementId){
    const element = document.getElementById(elementId).innerText;
    const value = parseInt(element);
    return value;

}

getElementByValueId('remain-seats');
function setValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}