let classicBun = document.getElementById("classic-bun");
let fullCorn = document.getElementById("full-corn");
let brioche = document.getElementById("brioche");
// let allBuns = ["classicBun", "fullCorn", "brioche"];


let cheeseYes = document.getElementById("cheese-yes");
let cheeseNo = document.getElementById("cheese-no");

let gouda = document.getElementById("gouda");
let emmental = document.getElementById("emmental");

let raw = document.getElementById("raw");
let wellDone = document.getElementById("well-done");

let tomatoes = document.getElementById("tomatoes");
let pickles = document.getElementById("pickles");
let salad = document.getElementById("salad");
let onions = document.getElementById("onions");

let ketchup = document.getElementById("ketchup");
let mayo = document.getElementById("mayo");
let samourai = document.getElementById("mayo");


function selectBun(){
    let newBurger = [];
    if (classicBun.value.selected == "classic-bun") {
        newBurger.push(classicBun.value);
    } else if (fullCorn.value.slected == "full-corn") {
        newBurger.push(fullCorn.value);
    } else if (brioche.value.selected == "brioche") {
        newBurger.push(brioche.value);
    }
    console.log(newBurger);
}



// function burger(bun, cheese, meat, garnish, sauce) {
//     this.bun = bun;
//     this.cheese = cheese;
//     this.meat = meat;
//     this.garnish = garnish;
//     this.sauce = sauce;
//     // this.drive = function(kilometers) {
//     //   this.distance += kilometers;
//     // };
//   }
