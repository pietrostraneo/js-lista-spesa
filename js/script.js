let list = ["Pomodoro", "Grana padano", "Pancetta", "Tritato di manzo", "Carote", "Latte", "Olio"]
let shown_list = document.querySelector("ul");

let i = 0;

while(i < list.length){
    shown_list.innerHTML = `<li>${list[i]}</li>`
    console.log(list[i])
    i++
}

