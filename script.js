
// ----------declaration----------

let User_score = 0;
let Computer_score = 0;
compChange = document.getElementById("computerScore");
userChange = document.getElementById("userScore");
compIncrement = compChange.textContent;
userIncrement = userChange.textContent;
subtext = document.getElementById("txt")

// --------------functions--------------

function ComputerPlay() {
    let random = Math.random()
    choice = 0;
    if (random <= 0.33) {
        choice = "rock";

    }

    else if (random > 0.33 && random <= 0.66) {
        choice = "paper";
    }

    else if (random > 0.66) {
        choice = "scissor";
    }

}
ding=document.getElementById("ding")
lossRound=document.getElementById("loseRound")
win=document.getElementById("win")
loss=document.getElementById("loss")


function game0() {

    userChoice = "rock";

    ComputerPlay();

    if (userChoice == "rock" && choice == "paper") {
        compChange = document.getElementById("computerScore")
        Computer_score++;
        compChange.innerText = Computer_score;
        loseRound.play();
        if (Computer_score == 4 || User_score == 4) {
            subtext.innerText = "Matchpoint! Paper wraps rock!"
        }
        else {
            subtext.innerText = "Oh No! Paper wraps rock!"
        }


    }


    else if (userChoice == "rock" && choice == "scissor") {
        userChange = document.getElementById("userScore")
        User_score++;
        userChange.innerText = User_score;
        ding.play();
        // console.log("WIn")
        // console.log(User_score)
        if (Computer_score == 4 || User_score == 4) {
            subtext.innerText = "Mathpoint! Rock breaks Scissor"
        }
        else {
            subtext.innerText = "Nice! Rock breaks Scissor"
        }

    }

    else if (userChoice == "rock" && choice == "rock") {
        subtext.innerText = "It's a tie both chose rock!"
    }

    if (Computer_score == 5) {
        subtext.innerText=("Do you have what it takes to defeat a computer?")
        weapon = document.getElementById("weapon")
        weapon.innerText = "You Have Lost!!"
        r = document.getElementById("rock")
        r.remove();
        p = document.getElementById("paper")
        p.remove();
        s = document.getElementById("scissor")
        s.remove();
        res = document.getElementById("restart")
        res.remove();


        tri = document.createElement("button")
        tri.innerText = "Try Again"
        tri.setAttribute("id", "try")
        tri.classList.add("try")


        butt = document.getElementById("trii")
        butt.appendChild(tri)

        let again = document.getElementById("try")
        again.onclick = function () { replay() };

        loss.play()

    }
    else if (User_score == 5) {

        subtext.innerText=("Do you have what it takes to defeat a computer again?")
        weapon = document.getElementById("weapon")
        weapon.innerText = "You Have Won!!"
        r = document.getElementById("rock")
        r.remove();
        p = document.getElementById("paper")
        p.remove();
        s = document.getElementById("scissor")
        s.remove();
        res = document.getElementById("restart")
        res.remove();



        tri = document.createElement("button")
        tri.innerText = "Play Again"
        tri.classList.add("try")
        tri.setAttribute("id", "try")
        butt = document.getElementById("trii")
        butt.appendChild(tri)
        let again = document.getElementById("try")
        again.onclick = function(){ replay() };
        win.play();
    }

}

// ---------------------game1---------------------

function game1() {

    userChoice = "paper";

    ComputerPlay();

    if (userChoice == "paper" && choice == "rock") {
        userChange = document.getElementById("userScore")
        User_score++;
        userChange.innerText = User_score;
        ding.play();
        // console.log("WIn")
        // console.log(User_score)
        // console.log(userChange)
        if (Computer_score == 4 || User_score == 4) {
            subtext.innerText = "Mathpoint!Paper wraps rock!"
        }
        else {
            subtext.innerText = "Congo! Paper beats rock!"
        }

    }

    else if (userChoice == "paper" && choice == "scissor") {
        compChange = document.getElementById("computerScore")
        Computer_score++;
        compChange.innerText = Computer_score;
        loseRound.play();


        if (Computer_score == 4 || User_score == 4) {
            subtext.innerText = "Mathpoint!Scissor cuts paper"
        }
        else {
            subtext.innerText = "Will Computer win this? Scissor cuts Paper!"
        }


    }

    else if (userChoice == "paper" && choice == "paper") {
        subtext.innerText = "It's a tie both chose Paper";
    }
    if (Computer_score == 5) {
        subtext.innerText=("Do you have what it takes to defeat a computer?")
        weapon = document.getElementById("weapon")
        weapon.innerText = "You Have Lost!!"
        r = document.getElementById("rock")
        r.remove();
        p = document.getElementById("paper")
        p.remove();
        s = document.getElementById("scissor")
        s.remove();
        res = document.getElementById("restart")
        res.remove();


        tri = document.createElement("button")
        tri.innerText = "Try Again"
        tri.classList.add("try")
        tri.setAttribute("id", "try")

        butt = document.getElementById("trii")
        butt.appendChild(tri)

        let again = document.getElementById("try")
        again.onclick = function () { replay() };
        loss.play();

    }
    else if (User_score == 5) {
        subtext.innerText=("Do you have what it takes to defeat a computer again?")
        weapon = document.getElementById("weapon")
        weapon.innerText = "You Have Won!!"
        r = document.getElementById("rock")
        r.remove();
        p = document.getElementById("paper")
        p.remove();
        s = document.getElementById("scissor")
        s.remove();
        res = document.getElementById("restart")
        res.remove();


        tri = document.createElement("button")
        tri.innerText = "Play Again"
        tri.classList.add("try")
        tri.setAttribute("id", "try")

        butt = document.getElementById("trii")
        butt.appendChild(tri)

        let again = document.getElementById("try")
        again.onclick = function () { replay() };
        win.play();
    }

}


// ---------------------game2--------------------

function game2() {

    userChoice = "scissor";


    ComputerPlay();

    if (userChoice == "scissor" && choice == "paper") {

        userChange = document.getElementById("userScore")
        User_score++;
        userChange.innerText = User_score;
        ding.play();


        if (Computer_score == 4 || User_score == 4) {
            subtext.innerText = "Mathpoint! Scissor cuts Paper"
        }
        else {
            subtext.innerText = "1 point to you! Scissor cuts paper!"
        }
    }

    else if (userChoice == "scissor" && choice == "rock") {
        compChange = document.getElementById("computerScore")
        Computer_score++;
        compChange.innerText = Computer_score;
        loseRound.play();


        if (Computer_score == 4 || User_score == 4) {
            subtext.innerText = "Mathpoint! Scissor cuts Paper"
        }
        else {
            subtext.innerText = "Will Computer beat a human?! Rock breaks Scissor!";
        }
    }


    else if (userChoice == "scissor" && choice == "scissor") {
        subtext.innerText = "It's a tie both chose Scissor"
    }

    if (Computer_score == 5) {
        subtext.innerText=("Do you have what it takes to defeat a computer?")
        weapon = document.getElementById("weapon")
        weapon.innerText = "You Have Lost!!"
        r = document.getElementById("rock")
        r.remove();
        p = document.getElementById("paper")
        p.remove();
        s = document.getElementById("scissor")
        s.remove();
        res = document.getElementById("restart")
        res.remove();


        tri = document.createElement("button")
        tri.innerText = "Try Again"
        tri.classList.add("try")
        tri.setAttribute("id", "try")

        butt = document.getElementById("trii")
        butt.appendChild(tri)

        let again = document.getElementById("try")
        again.onclick = function () { replay() };

        loss.play();


    }
    else if (User_score == 5) {
        subtext.innerText=("Do you have what it takes to defeat a computer again?")
        weapon = document.getElementById("weapon")
        weapon.innerText = "You Have Won!!"
        r = document.getElementById("rock")
        r.remove();
        p = document.getElementById("paper")
        p.remove();
        s = document.getElementById("scissor")
        s.remove();
        res = document.getElementById("restart")
        res.remove();



        tri = document.createElement("button")
        tri.innerText = "Play Again"
        tri.classList.add("try")
        tri.setAttribute("id", "try")
        butt = document.getElementById("trii")
        butt.appendChild(tri)
        let again = document.getElementById("try")
        again.onclick = function(){ replay() };
        win.play()
    }

}

function restart() {

    Computer_score = 0;
    User_score = 0;
    compChange.innerText = Computer_score;
    userChange.innerText = User_score;
    subtext.innerText="First to 5 Wins!"

}

function replay() {

    Computer_score = 0;
    User_score = 0;
    compChange.innerText = Computer_score;
    userChange.innerText = User_score;
    subtext.innerText="First to 5 Wins!"


    weapon = document.getElementById("weapon")
    weapon.innerText = "What Will You Choose?";

    rNode = document.createElement("img");
    rNode.src = "/images/cave-painting.png";
    rNode.classList.add("rock");
    rNode.classList.add("btn")
    rNode.setAttribute("id", "rock");



    pNode = document.createElement("img")
    pNode.src = "/images/document.png";
    pNode.classList.add("paper")
    pNode.classList.add("btn")
    pNode.setAttribute("id", "paper");


    sNode = document.createElement("img")
    sNode.src = "/images/scissors-opened-tool-shape.png";
    sNode.classList.add("scissor")
    sNode.classList.add("btn")
    sNode.setAttribute("id", "scissor");


    res = document.createElement("button")
    res.classList.add("restart")
    res.setAttribute("id", "restart")
    res.innerText = "Reset"

    res.onclick = function () { restart() }

    but = document.getElementById("trii")
    but.appendChild(res);

    div = document.getElementById("buttons");
    div.appendChild(rNode);
    div.appendChild(pNode);
    div.appendChild(sNode);

    let rockClick = document.getElementById("rock")
    rockClick.onclick = function () { game0() }


    paperClick = document.getElementById("paper")
    paperClick.onclick = function () { game1() }


    scissorClick = document.getElementById("scissor")
    scissorClick.onclick = function () { game2() }

    again = document.getElementById("try")
    again.remove();


}