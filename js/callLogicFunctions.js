//add button bg
function setElementByButtonColor(elementId){
    const seatBg = document.getElementById(elementId)
    seatBg.classList.add('bg-green-500')
}
//remove button bg
function removeElementByButtonColor(elementId){
    const removeBg = document.getElementById(elementId)
    removeBg.classList.remove('bg-gray-300')
}