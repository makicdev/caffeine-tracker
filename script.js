let inputEl = document.getElementById("caf-input")
let checkbtnEl = document.getElementById("check-btn")

let outputfield = document.getElementById("text-output")
let informationsHTML = document.getElementById("informations")

let caffeine = 0


checkbtnEl.addEventListener("click", function(){
    outputfield.textContent = ""
    caffeine = 0
    let avgCaf = Number(inputEl.value) * 70
    caffeine += avgCaf
    outputfield.textContent = caffeine + "mg"

    if(avgCaf > 400) {
        informationsHTML.innerHTML = `<p class="warning">Warning: Your intake exceeds the recommended limit of 400mg per day!</p>`
    } else {
        informationsHTML.innerHTML = ""
    }

})