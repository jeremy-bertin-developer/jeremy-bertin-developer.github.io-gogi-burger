let classicBun = document.getElementById("classic-bun");
let fullCorn = document.getElementById("full-corn");
let brioche = document.getElementById("brioche");
let validateBun = document.getElementById("validate-bun");
let newBunValidation = document.getElementById("new-bun-validation");


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

let newBun;
let newBurger = [];

function emptyTheBun() {
    newBun = [];
}

function emptytheBurger() {
    newBurger = [];
}

function disableOption(arg){
    arg.disabled = true;
}

function chooseBun() {
    if (classicBun.selected) {
        emptyTheBun();
        emptytheBurger();
        newBun = classicBun.value;
        newBurger.push("Your bun is : " + newBun + ",");
    } else if (fullCorn.selected) {
        emptyTheBun();
        emptytheBurger();
        newBun = fullCorn.value;
        newBurger.push("Your bun is : " + newBun + ",");
    } else if (brioche.selected) {
        emptyTheBun();
        emptytheBurger();
        newBun = brioche.value;
        newBurger.push("Your bun is : " + newBun + ",");
    }
    validateBun.style.display = "inline-block";
    console.log(newBun);
    console.log(newBurger);
}

function confirmBun(){
    disableOption(classicBun);
    disableOption(fullCorn);
    disableOption(brioche);
    newBunValidation.innerHTML = "Your bun is : " + newBun;
    validateBun.style.display = "none";
    
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
