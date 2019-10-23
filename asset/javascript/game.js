

let randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
$('#randNum').html(randNumber);

let crystal1 = Math.floor(Math.random() * 12) + 1;
let crystal2 = Math.floor(Math.random() * 12) + 1;
let crystal3 = Math.floor(Math.random() * 12) + 1;
let crystal4 = Math.floor(Math.random() * 12) + 1;

let wins = 0;
let losses = 0;
let totScore = 0;
$('#totScore').text(totScore);
function win() {
    wins = wins + 1;
    $('#wins').text(wins);
    resetTwo();
    reset();
}
function lose() {
    losses = losses + 1;
    $('#losses').text(losses);
    resetTwo();
    reset();

}
$('#crystal1').click(() => {
    totScore = totScore + crystal1
    $('#totScore').text(totScore);
    if (totScore === randNumber) {
        win()
            reset();
        resetTwo();
    } else if (totScore > randNumber) {
        lose();
        reset();
        resetTwo();
    }
});

$('#crystal2').click(() => {
    totScore = totScore + crystal2
    $('#totScore').text(totScore);
    if (totScore === randNumber) {
        win()
            reset();
        resetTwo();
    } else if (totScore > randNumber) {
        lose();
        reset();
        resetTwo();
    }
});


$('#crystal3').click(() => {
    totScore = totScore + crystal3
    $('#totScore').text(totScore);
    if (totScore === randNumber) {
        win()
            reset();
        resetTwo();
    } else if (totScore > randNumber) {
        lose();
        reset();
        resetTwo();
    }
});

$('#crystal4').click(() => {
    totScore = totScore + crystal4
    $('#totScore').text(totScore);
    if (totScore === randNumber) {
        win()
            reset();
        resetTwo();
    } else if (totScore > randNumber) {
        lose();
        reset();
        resetTwo();
    }
});

function reset() {
    totScore = 0;
    $('#totScore').text(totScore);
}

function resetTwo() {
    randNumber = Math.floor(Math.random() *((120 - 19) + 1) + 19);
    $('#randNum').html(randNumber);
    crystal1 = Math.floor(Math.random( * 12) + 1;
    crystal2 = Math.floor(Math.random( * 12) + 1;
    crystal3 = Math.floor(Math.random( * 12) + 1;
    crystal4 = Math.floor(Math.random( * 12) + 1;
}
});

