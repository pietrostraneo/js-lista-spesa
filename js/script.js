let list = ["Pomodoro", "Grana padano", "Pancetta", "Tritato di manzo", "Carote", "Latte", "Olio"];
let shown_list = document.querySelector("ul");

console.log(list);
let i = 0;


// METODO 1

// while(i < list.length){
//     shown_list.innerHTML += `<li>${list[i]}</li>`
//     console.log(list[i])
//     i++
// }



// METODO 2

while(i < list.length){
    const li = document.createElement("li");
    li.innerText = list[i];
    shown_list.appendChild(li); 
    console.log(list[i]);
    i++;
}

