let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)
function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.textContent = count
}

function save() {
   let countStr = count + " - "
    saveEl.textContent += countStr

    console.log(count)
}
