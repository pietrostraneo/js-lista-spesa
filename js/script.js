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

// while(i < list.length){
//     const li = document.createElement("li");
//     li.innerText = list[i];
//     shown_list.appendChild(li); 
//     console.log(list[i]);
//     i++;
// }



// BONUS LATTE

// while(i < list.length){
//     const li = document.createElement("li");
//     li.innerText = list[i];
//     shown_list.appendChild(li); 
//     console.log(list[i]);
//     if(list[i] == "Latte"){
//         li.innerText += (" (non scremato)")
//     }
//     i++;
// }



// BONUS LATTE 2

while(i < list.length){
    const li = document.createElement("li");
    li.innerText = list[i];
    console.log(list[i]);
    if(list[i] == "Latte"){
        const response = confirm("Vuoi indicare nella lista che il tuo latte è scremato?")
        if(response){
            li.innerText += (" (scremato)")
        }
        else{
            li.innerText += (" (non scremato)")
        }
    }
    shown_list.appendChild(li); 
    i++;
}