// variables for the buns
let classicBun = document.getElementById("classic-bun");
let fullCorn = document.getElementById("full-corn");
let brioche = document.getElementById("brioche");

// button to validate the bun
let validateBun = document.getElementById("validate-bun");

// to dblue-rare the buns
let newBunValidation = document.getElementById("new-bun-validation");
let newBunValidationBottom = document.getElementById("new-bun-validation-bottom");

let cheese = document.getElementById("cheese");
let cheeseYes = document.getElementById("cheese-yes");
let cheeseNo = document.getElementById("cheese-no");

let gouda = document.getElementById("gouda");
let emmental = document.getElementById("emmental");
let validateCheese = document.getElementById("validate-cheese");
let newCheeseValidation = document.getElementById("new-cheese-validation");

let slider = document.getElementById("slider");
let blueRare = document.getElementById("blue-rare");
// let wellDone = document.getElementById("well-done");
let showCookedMeat = document.getElementById("show-cooked-meat");
let validateCookedMeat = document.getElementById("validate-cooked-meat");
let newMeatValidation = document.getElementById("new-meat-validation");

let tomatoes = document.getElementById("tomatoes");
let pickles = document.getElementById("pickles");
let salad = document.getElementById("salad");
let onions = document.getElementById("onions");
let validateGarnish = document.getElementById("validate-garnish");
let newTomatoesValidation = document.getElementById("new-tomatoes-validation");
let newPicklesValidation = document.getElementsByClassName("new-pickle-validation");
let newSaladValidation = document.getElementById("new-salad-validation");
let newOnionsValidation = document.getElementsByClassName("new-onions-validation");

// let sauces = document.selected.sauces.value;
let ketchup = document.getElementById("ketchup");
let mayo = document.getElementById("mayo");
let samourai = document.getElementById("samourai");
let allSauces = document.getElementById("all-sauces");
let validateSauce = document.getElementById("validate-sauce");
let newKetchupValidation = document.getElementById("new-ketchup-validation");
let newMayoValidation = document.getElementById("new-mayo-validation");
let newSamouraiValidation = document.getElementById("new-samourai-validation");

let newBun;
let newCheese;
let newMeat;
let newGarnish = [];
let newBurger = [];
let newSauce;

function emptyTheBun() {
    newBun = [];
}

function emptyCheese() {
    newCheese = [];
}

function emptyTheMeat() {
    newMeat = [];
}

function emptytheBurger() {
    newBurger = [];
}

function emptySauce() {
    newSauce = [];
}

function disableOption(arg) {
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

function confirmBun() {
    newBurger.push("Your bun is : " + newBun + ",");
    disableOption(classicBun);
    disableOption(fullCorn);
    disableOption(brioche);
    newBunValidation.style.display = "block";
    newBunValidationBottom.style.display = "block";
    newBunValidation.innerHTML = "Your bun is : " + newBun;
    validateBun.style.display = "none";

}

function cheeseYesSelection() {
    if (cheeseYes.checked == true) {
        cheese.style.display = "inline-block";
        cheeseNo.disabled = true;
    } else if (cheeseYes.checked == false) {
        cheese.style.display = "none";
        cheeseNo.disabled = false;
    }
}

function cheeseNoSelection() {
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

function confirmCheese() {
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

function chooseMeat() {
    if (slider.value < 17) {
        emptyTheMeat();
        blueRare.value = "Blue Rare - Very red and cold";
        newMeat = blueRare.value;
        showCookedMeat.innerHTML = newMeat;
    } else if (slider.value < 34) {
        emptyTheMeat();
        blueRare.value = "Rare - Cold red center, soft";
        newMeat = blueRare.value;
        showCookedMeat.innerHTML = newMeat;
    } else if (slider.value < 51) {
        emptyTheMeat();
        blueRare.value = "Medium Rare - Warm red center, firmer";
        newMeat = blueRare.value;
        showCookedMeat.innerHTML = newMeat;
    } else if (slider.value < 68) {
        emptyTheMeat();
        blueRare.value = "Medium - Pink and firm";
        newMeat = blueRare.value;
        showCookedMeat.innerHTML = newMeat;
    } else if (slider.value < 85) {
        emptyTheMeat();
        blueRare.value = "Medium Well -Small amount of pink in the center";
        newMeat = blueRare.value;
        showCookedMeat.innerHTML = newMeat;
    } else if (slider.value <= 100) {
        emptyTheMeat();
        blueRare.value = "Well Done - Completely cooked throughout, very firm";
        newMeat = blueRare.value;
        showCookedMeat.innerHTML = newMeat;
    }
    showCookedMeat.style.display = "block";
    validateCookedMeat.style.display = "block";
    console.log(newMeat);
}

function confirmCookedMeat() {
    newBurger.push("Your meat is : " + newMeat + ",");
    disableOption(slider);
    newMeatValidation.style.display = "block";
    newMeatValidation.innerHTML = "Your meat is : " + newMeat;
    validateCookedMeat.style.display = "none";
    showCookedMeat.style.display = "none";
    console.log(newBurger);
}

function tomatoesSelection() {
    if (tomatoes.checked == true) {
        newGarnish.push(tomatoes.value);
        newTomatoesValidation.style.display = "block";
    } else if (tomatoes.checked == false) {
        newGarnish.pop(tomatoes.value);
        newTomatoesValidation.style.display = "none";
    }
    validateGarnish.style.display = "block";
    console.log(newGarnish);
}

function picklesSelection() {
    if (pickles.checked == true) {
        newGarnish.push(pickles.value);
        newPicklesValidation[0].style.display = "block";
        newPicklesValidation[1].style.display = "block";
    } else if (pickles.checked == false) {
        newGarnish.pop(pickles.value);
        newPicklesValidation[0].style.display = "none";
        newPicklesValidation[1].style.display = "none";
    }
    validateGarnish.style.display = "block";
    console.log(newGarnish);
}

function saladSelection() {
    if (salad.checked == true) {
        newGarnish.push(salad.value);
        newSaladValidation.style.display = "block";
    } else if (salad.checked == false) {
        newGarnish.pop(salad.value);
        newSaladValidation.style.display = "none";
    }
    validateGarnish.style.display = "block";
    console.log(newGarnish);
}

function onionsSelection() {
    if (onions.checked == true) {
        newGarnish.push(onions.value);
        newOnionsValidation[0].style.display = "block";
        newOnionsValidation[1].style.display = "block";
    } else if (onions.checked == false) {
        newGarnish.pop(onions.value);
        newOnionsValidation[0].style.display = "none";
        newOnionsValidation[1].style.display = "none";
    }
    validateGarnish.style.display = "block";
    console.log(newGarnish);
}

function confirmGarnish() {
    newBurger.push("Your garnish : " + newGarnish + ",");
    disableOption(tomatoes);
    disableOption(pickles);
    disableOption(salad);
    disableOption(onions);
    validateGarnish.style.display = "none";
    console.log(newBurger);
}

function chooseSauce() {

    if (ketchup.selected) {
        emptySauce();
        newSauce = ketchup.value;
    } else if (mayo.selected) {
        emptySauce();
        newSauce = mayo.value;
    } else if (samourai.selected) {
        emptySauce();
        newSauce = samourai.value;
    } else if (allSauces.selected) {
        emptySauce();
        newSauce = allSauces.value;
    }
    validateSauce.style.display = "inline-block";
    console.log(newSauce);
}

function confirmSauce() {
    if (newSauce == ketchup.value) {
        console.log(newSauce);
        newMayoValidation.style.display = "block";

    } else if (newSauce == mayo.value) {
        newMayoValidation.style.display = "block";

    } else if (newSauce == samourai.value) {
        newSamouraiValidation.style.display = "block";

    } else if (newSauce == allSauces.value) {
        newKetchupValidation.style.display = "block";
        newMayoValidation.style.display = "block";
        newSamouraiValidation.style.display = "block";
    }
    newBurger.push("Your sauce : " + newSauce + ",");
    disableOption(ketchup);
    disableOption(mayo);
    disableOption(samourai);
    disableOption(allSauces);
    validateSauce.style.display = "none";
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
