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
    playerImgHTML = document.getElementsByClassName("playerImg");

    logHTML = document.getElementById("gameLog");
}

function playerSelect(hand) {
    playerSelected == hand ? playerSameSelect++ : (playerSelected = hand, playerSameSelect = 1);
    playerSelected == 'rock' ? playerDecisionHTML.src="Images/rock.jpg" : 
    playerSelected == 'paper' ? playerDecisionHTML.src="Images/paper.jpg" :
    playerDecisionHTML.src="Images/scissors.png";

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

    for (let img of playerImgHTML) {
        img.removeAttribute('onclick');
    }
    setTimeout(() => {
        if (playerSameSelect == 3) {
            playerSelected == 'rock' ? playerRock-- : 
            playerSelected == 'paper' ? playerPaper-- : 
            playerScissor--;
            playerSameSelect = 0;
            if (compSameSelect == 3) {
                compSelected == 'rock' ? compRock-- : 
                compSelected == 'paper' ? compPaper-- : 
                compScissor--;
                compSameSelect = 0;
                logHTML.innerHTML += `Both ${playerSelected}s broke <br>`;
            } else {
                logHTML.innerHTML += `Player's ${playerSelected} broke <br>`;
            }
        } else if (compSameSelect == 3) {
            compSelected == 'rock' ? compRock-- : 
            compSelected == 'paper' ? compPaper-- : 
            compScissor--;
            compSameSelect = 0;
            logHTML.innerHTML += `Computer's ${compSelected} broke <br>`;
        } else {
            if (playerSelected == 'rock') {
                if (compSelected == 'paper') {
                    playerRock--;
                    compRock++;
                    logHTML.innerHTML += 'Player-rock; Computer-paper; Computer wins <br>';
                } else if (compSelected == 'scissors') {
                    playerScissor++;
                    compScissor--;
                    logHTML.innerHTML += 'Player-rock; Computer-scissors; Player wins <br>';
                } else {
                    logHTML.innerHTML += 'Player-rock; Computer-rock; Tie <br>';
                }
            } else if (playerSelected == 'paper') {
                if (compSelected == 'rock') {
                    playerRock++;
                    compRock--;
                    logHTML.innerHTML += 'Player-paper; Computer-rock; Player wins <br>';
                } else if (compSelected == 'scissors') {
                    playerPaper--;
                    compPaper++;
                    logHTML.innerHTML += 'Player-paper; Computer-scissors; Computer wins <br>';
                } else {
                    logHTML.innerHTML += 'Player-paper; Computer-paper; Tie <br>';
                }
            } else {
                if (compSelected == 'rock') {
                    playerScissor--;
                    compScissor++;
                    logHTML.innerHTML += 'Player-scissors; Computer-rock; Computer wins <br>';
                } else if (compSelected == 'paper') {
                    playerPaper++;
                    compPaper--;
                    logHTML.innerHTML += 'Player-scissors; Computer-paper; Player wins <br>';
                } else {
                    logHTML.innerHTML += 'Player-scissors; Computer-scissors; Tie <br>';
                }
            }
        }

        checkInventory();
        display();
    }, 500);
}

function display() {
    playerDecisionHTML.src="Images/questionMark.jpg";
    compDecisionHTML.src="Images/questionMark.jpg";
    playerRockHTML.innerHTML = 'Rock - ' + playerRock;
    playerPaperHTML.innerHTML = 'Paper - ' + playerPaper;
    playerScissorHTML.innerHTML = 'Scissors - ' + playerScissor;

    compRockHTML.innerHTML = 'Rock - ' + compRock;
    compPaperHTML.innerHTML = 'Paper - ' + compPaper;
    compScissorHTML.innerHTML = 'Scissor - ' + compScissor;
}
function checkInventory() {
    playerRock == 0 ? playerImgHTML[0].removeAttribute('onclick') : playerImgHTML[0].setAttribute('onclick', "playerSelect('rock');");
    playerPaper == 0 ? playerImgHTML[1].removeAttribute('onclick') : playerImgHTML[1].setAttribute('onclick', "playerSelect('paper');");
    playerScissor == 0 ? playerImgHTML[2].removeAttribute('onclick') : playerImgHTML[2].setAttribute('onclick', "playerSelect('scissors');");

    if (playerRock == 0 && playerPaper == 0 && playerScissor == 0) {
        gameResultPlayer.innerHTML = 'Loser!';
        gameResultComputer.innerHTML = 'Winner!';
    }
    if (compRock == 0 && compPaper == 0 && compScissor == 0) {
        gameResultPlayer.innerHTML = 'Winner!';
        gameResultComputer.innerHTML = 'Loser!';
        for (let img of playerImgHTML) {
            img.removeAttribute('onclick');
        }
    }
}
function reset() {
    gameResultPlayer.innerHTML = '';
    gameResultComputer.innerHTML = '';
    playerRock = 5;
    playerPaper = 5;
    playerScissor = 5;
    compRock = 5;
    compPaper = 5;
    compScissor = 5;
    logHTML.innerHTML = '';
    checkInventory();
    display();
}
function getRandomInt() {
    let assign = {
        0: compRock,
        1: compPaper,
        2: compScissor
    };
    let num = Math.floor(Math.random() * 3);
    while (assign[num] <= 0) {
        num = Math.floor(Math.random() * 3);
    }
    return num;
}
