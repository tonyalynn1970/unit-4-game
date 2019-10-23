var targetNumber;
var numberOptions;
var counterTotal = 0;

$("#counter-total").text(counterTotal);
$("#counter-total").empty();
var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);
var crystal1 = $("#crystal1");
var crystal2 = $("#crystal2");
var crystal3 = $("#crystal3");
var crystal4 = $("#crystal4");
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var ranNums = [];
targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;

$(document).ready(function () {
    var topRanPixels = Math.floor(Math.random() * 300);

    setInterval(createStarRight, 2000);

    function createStarRight() {
        topRanPixels = Math.floor(Math.random() * 300);
        $(".shooting-star-fast").css({
            top: topRanPixels,
            left: 2000,
            position: "absolute",
            visibility: "initial"
        });
    }

    setInterval(createStarLeft, 4700);

    function createStarLeft() {
        topRanPixels = Math.floor(Math.random() * 300);
        $(".shooting-star-fast").css({
            top: topRanPixels,
            left: -100,
            position: "absolute",
            visibility: "initial"
        });
    }

    setInterval(shootingStarsRight, 2000);

    function shootingStarsRight() {
        $(".shooting-star-fast").animate(
            { left: "-=2100px", top: topRanPixels },
            "slow"
        );
    }

    setInterval(shootingStarsLeft, 4700);

    function shootingStarsLeft() {
        $(".shooting-star-fast").animate(
            { left: "+=2100px", top: topRanPixels },
            "slow"
        );
    }

    setInterval(createStarRightSlow, 6000);

    function createStarRightSlow() {
        $(".shooting-star-slow").css({
            top: topRanPixels,
            left: 1800,
            position: "absolute",
            visibility: "initial"
        });
    }

    setInterval(shootingStarsRightSlow, 1000);

    function shootingStarsRightSlow() {
        $(".shooting-star-slow").animate(
            { left: "-=1900px", top: topRanPixels },
            "slow"
        );
    }

    var starSlow = $("<div>");

    starSlow.addClass("shooting-star-slow");

    $("#background").append(starSlow);

    var starFast = $("<div>");

    starFast.addClass("shooting-star-fast");

    $("#background").append(starFast);

    $("#current-random-num").text(targetNumber);

    function restart() {
        counterTotal = 0;
        $("#counter-total").text(counterTotal);
        $("#counter-total").empty();
        $("#current-random-num").empty();
        targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#current-random-num").text(targetNumber);
        ranNums = [];
        nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        randomCrystalValues();
    }

    function randomCrystalValues() {
        (i = nums.length), (j = 0);

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            ranNums.push(nums[j]);
            nums.splice(j, 1);
        }

        console.log(ranNums);
    }
    randomCrystalValues();

    $(".crystal-image").on("click", function () {
        $(crystal1).attr("data-crystalvalue", ranNums[0]);
        $(crystal2).attr("data-crystalvalue", ranNums[1]);
        $(crystal3).attr("data-crystalvalue", ranNums[2]);
        $(crystal4).attr("data-crystalvalue", ranNums[3]);

        var crystalValue = $(this).attr("data-crystalvalue");
        crystalValue = parseInt(crystalValue);
        console.log(crystalValue);
        // Add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        counterTotal += crystalValue;
        $("#counter-total").text(counterTotal);

        if (counterTotal === targetNumber) {
            alert("You win!");
            wins++;
            $("#wins").text(wins);
            restart();
        } else if (counterTotal >= targetNumber) {
            alert("You lose!!");
            losses++;
            $("#losses").text(losses);
            restart();
        }
    });
});

