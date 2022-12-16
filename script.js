let playerRock = 5;
let playerPaper = 5;
let playerScissor = 5;
let playerSelected = '';
let playerSameSelect = 1;

let compRock = 5;
let compPaper = 5;
let compScissor = 5;
let compSelected = '';
let compSameSelect = 1;

function initialize() {
    gameResultPlayer = document.getElementById("playerResult");
    gameResultComputer = document.getElementById("computerResult");

    playerRockHTML = document.getElementById("playerR");
    playerPaperHTML = document.getElementById("playerP")
    playerScissorHTML = document.getElementById("playerS");
    playerDecisionHTML = document.getElementById("playerDecision");

    compRockHTML = document.getElementById("compR");
    compPaperHTML = document.getElementById("compP");
    compScissorHTML = document.getElementById("compS");
    compDecisionHTML = document.getElementById("compDecision");

    logHTML = document.getElementById("gameLog");
}

function playerSelect(hand) {
    playerSelected == hand ? playerSameSelect++ : (playerSelected = hand, playerSameSelect = 1);

    let num = getRandomInt();
    if (num == 0) {
        compSelected == 'rock' ? compSameSelect++ : compSameSelect = 1;
        compSelected = 'rock';
        compDecisionHTML.src = 'Images/rock.jpg';
    } else if (num == 1) {
        compSelected == 'paper' ? compSameSelect++ : compSameSelect = 1;
        compSelected = 'paper';
        compDecisionHTML.src = 'Images/paper.jpg';
    } else {
        compSelected == 'scissors' ? compSameSelect++ : compSameSelect = 1;
        compSelected = 'scissors';
        compDecisionHTML.src = 'Images/scissors.png';
    }

    setTimeout(() => {
        if (playerSameSelect == 3) {

        } else if (compSameSelect == 3) {

        } else {
            
        }
    }, 1000);
    display();
}

function display() {
    playerSelected == 'rock' ? playerDecisionHTML.src="Images/rock.jpg" : 
    playerSelected == 'paper' ? playerDecisionHTML.src="Images/paper.jpg" :
    playerDecisionHTML.src="Images/scissors.png";
}
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}