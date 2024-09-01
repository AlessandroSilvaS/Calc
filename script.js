var display = document.getElementById("display")

const simbols = ['+', '-', '*', '/']

function addToDisplay(char){
    display.value += char
}

function removeToDisplay(){
    let DisplayToDelete = Array.from(display.value)
    DisplayToDelete.pop()
    display.value = DisplayToDelete.join('')
}
function resolveCalc(){
    try {let resolve = eval(display.value)
    if(isNaN(resolve) || !isFinite(resolve)){
        display.value = "Error"
    } else{
        display.value = resolve
    }}
    catch(error){
        display.value = "Error"
        console.log(error)
    }
}
document.addEventListener('keydown', (e) => {
    if(e.key === "A"){
        display.value = null
    }
    else if(e.key === "e"){
        resolveCalc()
    }
    else if ((e.key >= '0' && e.key <= '9') || simbols.includes(e.key)){
        addToDisplay(e.key)
    }
    else if(e.key === 'Backspace'){
        removeToDisplay()
    }
})
