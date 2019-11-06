//Global Variables

//Crystal Variables
var crystal = {
    crystal1:
    {
        name: "crystal1",
        value: 0
    },
    crystal2:
    {
        name: "crystal2",
        value: 0
    },
    crystal3:
    {
        name: "crystal3",
        value: 0
    },
    crystal4:
    {
        name: "crystal4",
        value: 0
    }
};

//Scores (Current and Target)
var currentScore = 0;
var TargetScore = 0;
// Wins and Losses
var winCount = 0;
var lossCount = 0;
// var min = 20;
// var max = 100;
//Functions
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min) + 1)
}
var startGame = function () {
    //Reset the Current Score
    currentScore = 0;
    //Set a new Target Score(between 19 and 120)
    TargetScore = getRandom(19, 120)
    $("#targetScore").html(TargetScore);
    // console.log(TargetScore);
}
//Set different values for each of the crystals(between 1 and 12)
crystal.crystal1.value = getRandom(1, 12);
crystal.crystal2.value = getRandom(1, 12);
crystal.crystal3.value = getRandom(1, 12);
crystal.crystal4.value = getRandom(1, 12);
//Change the HTML to reflect all of these changes
$("#yourScore").html(currentScore);
$("#targetScore").html(TargetScore);
//Testing Console
console.log("--------------------------------")
console.log("Target Score:  " + TargetScore);
console.log("crystal1: " + crystal.crystal1.value + " |crystal2 " + crystal.crystal2.value + " |crystal3 " + crystal.crystal3.value + " |crystal4 " + crystal.crystal4.value);
console.log("--------------------------------")
//Respond to clicks on the crystal
var addValues = function (crystal) {
    //Change currentScore
    currentScore = currentScore + crystal.value;
    //Change the HTML to reflect change to  currentScore
    $("#yourScore").html(currentScore);
    //Call the checkWin Function
    checkWin();
    //Testing Console
    console.log("Your Score:" + currentScore);
}
//Check if User Won or Lost and Reset the Game
var checkWin = function () {
    //Check of currentScore is larger
    if (currentScore > TargetScore) {
        alert("Sorry. You lost");
        console.log("You Lost");

        //Add to Loss Counter 
        lossCount++;
        //Change loss Count HTML
        $("#lossCount").html(lossCount);
        //Restart the game
        startGame();
    }
    else if (currentScore == TargetScore) {
        alert("You Won!");
        console.log("Your Won!");
        //Add to Win Counter
        winCount++;
        //Change Win Count HTML
        $("#winCount").html(winCount);
        //Restart the game
        startGame();
    }
}
//Math Process

//Starts the Game the First Time
startGame();

$("#crystal1").click(function () {
    addValues(crystal.crystal1);
});

$("#crystal2").click(function () {
    addValues(crystal.crystal2);
});

$("#crystal3").click(function () {
    addValues(crystal.crystal3);
});

$("#crystal4").click(function () {
    addValues(crystal.crystal4);
});

