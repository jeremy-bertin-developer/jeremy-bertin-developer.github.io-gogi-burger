let classicBun = document.getElementById("classic-bun");
let fullCorn = document.getElementById("full-corn");
let brioche = document.getElementById("brioche");
let validateBun = document.getElementById("validate-bun");
let newBunValidation = document.getElementById("new-bun-validation");

let cheese = document.getElementById("cheese");
let cheeseYes = document.getElementById("cheese-yes");
let cheeseNo = document.getElementById("cheese-no");

let gouda = document.getElementById("gouda");
let emmental = document.getElementById("emmental");
let validateCheese = document.getElementById("validate-cheese");
let newCheeseValidation = document.getElementById("new-cheese-validation");

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
let newCheese;
let newBurger = [];

function emptyTheBun() {
    newBun = [];
}

function emptyCheese() {
    newCheese = [];
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
        newBun = classicBun.value;
    } else if (fullCorn.selected) {
        emptyTheBun();
        newBun = fullCorn.value;
    } else if (brioche.selected) {
        emptyTheBun();
        newBun = brioche.value;
    };
    validateBun.style.display = "inline-block";
}

function confirmBun(){
    newBurger.push("Your bun is : " + newBun + ",");
    disableOption(classicBun);
    disableOption(fullCorn);
    disableOption(brioche);
    newBunValidation.style.display = "block";
    newBunValidation.innerHTML = "Your bun is : " + newBun;
    validateBun.style.display = "none";
    
}

function cheeseYesSelection(){
    if(cheeseYes.checked == true){
        cheese.style.display = "inline-block";
        cheeseNo.disabled = true;
    } else if (cheeseYes.checked == false) {
        cheese.style.display = "none";
        cheeseNo.disabled = false;
    } 
}

function cheeseNoSelection(){
    if (cheeseNo.checked == true) {
        cheeseYes.disabled = true;
    } 

    else if (cheeseNo.checked == false) {
        cheeseYes.disabled = false;
    }
}

function chooseCheese() {
    if (gouda.selected) {
        emptyCheese();
        newCheese = gouda.value;
    } else if (emmental.selected) {
        emptyCheese();
        newCheese = emmental.value;
    }
    validateCheese.style.display = "block";
}

function confirmCheese(){
    newBurger.push("Your cheese is : " + newCheese + ",");
    disableOption(gouda);
    disableOption(emmental);
    newCheeseValidation.style.display = "block";
    newCheeseValidation.innerHTML = "Your cheese is : " + newCheese;
    validateCheese.style.display = "none";
    cheeseYes.disabled = true;
    cheeseNo.disabled = true;
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
