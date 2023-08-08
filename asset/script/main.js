//main variables
let UserDis = document.querySelector("#userDis");
let BotDis = document.querySelector("#botDis");
let paper = document.querySelector("#paperBtn");
let scissor = document.querySelector("#scissorBtn");
let rock = document.querySelector("#rockBtn");
let score = document.querySelector("#game");
let YOUscore = document.querySelector("#userScore");
let BOTscore = document.querySelector("#botScore");
let hisList = document.querySelector ("#historyList")

//sub variables
let userValueData = ["PAPER", "SCISSOR" , "ROCK"]
let botValue= ["PAPER", "SCISSOR" , "ROCK"];

let Uscore = YOUscore;
let Bscore = BOTscore;
Uscore = 0;
Bscore = 0;


//buttons
paper.addEventListener("click" , paperSide);
scissor.addEventListener("click" , scissorSide);
rock.addEventListener("click" , rockSide);


//functions
function paperSide () {
    let index = Math.round(Math.random () * 2);

    BotDis.innerHTML = (botValue[index])
    console.log (botValue[index])
    UserDis.innerHTML= userValueData[0];
    console.log (userValueData[0])

    if (botValue[index] == "PAPER"){
        score.innerHTML = "TIE"
        let history = document.createElement("h6")
        history.style.color = "orange";
        history.innerHTML = userValueData[0] + " VS. " + botValue[0]
        hisList.appendChild(history)

    }
    else if (botValue[index] == "SCISSOR"){
        score.innerHTML = "BOT WIN"
        Bscore = Bscore + 1;
        BOTscore.innerHTML = Bscore;
        console.log(Bscore)
        let history = document.createElement("h6")
        history.style.color = "red";
        history.innerHTML = userValueData[0] + " VS. " + botValue[1]
        hisList.appendChild(history)
    }
    else if (botValue[index] == "ROCK"){
        score.innerHTML = "YOU WIN"
        Uscore = Uscore + 1;
        YOUscore.innerHTML = Uscore;
        console.log(Uscore);
        let history = document.createElement("h6")
        history.style.color = "green";
        history.innerHTML = userValueData[0] + " VS. " + botValue[2]
        hisList.appendChild(history)
    }
    else {
        score.innerHTML = ""
    }
   
} 

function scissorSide () {
    let index = Math.round(Math.random () * 2);
    BotDis.innerHTML = (botValue[index])
    console.log (botValue[index])
    UserDis.innerHTML= userValueData[1];

    if (botValue[index] == "SCISSOR"){
        score.innerHTML = "TIE"
        let history = document.createElement("h6")
        history.style.color = "orange";
        history.innerHTML = userValueData[1] + " VS. " + botValue[1]
        hisList.appendChild(history)
    }
    else if (botValue[index] == "ROCK"){
        score.innerHTML = "BOT WIN"
        Bscore = Bscore + 1;
        BOTscore.innerHTML = Bscore;
        console.log(Bscore)
        let history = document.createElement("h6")
        history.style.color = "red";
        history.innerHTML = userValueData[1] + " VS. " + botValue[2]
        hisList.appendChild(history)
    }
    else if (botValue[index] == "PAPER"){
        score.innerHTML = "YOU WIN"
        Uscore = Uscore + 1;
        YOUscore.innerHTML = Uscore;
        console.log(Uscore);
        let history = document.createElement("h6")
        history.style.color = "green";
        history.innerHTML = userValueData[1] + " VS. " + botValue[0]
        hisList.appendChild(history)
    }
    else {
        score.innerHTML = ""
    }
} 

function rockSide () {
    let index = Math.round(Math.random () * 2);
    BotDis.innerHTML = (botValue[index])
    console.log (botValue[index])
    UserDis.innerHTML= userValueData[2];

    if (botValue[index] == "ROCK"){
        score.innerHTML = "TIE"
        let history = document.createElement("h6")
        history.style.color = "orange";
        history.innerHTML = userValueData[2] + " VS. " + botValue[2]
        hisList.appendChild(history)
    }
    else if (botValue[index] == "PAPER"){
        score.innerHTML = "BOT WIN"
        Bscore = Bscore + 1;
        BOTscore.innerHTML = Bscore;
        console.log(Bscore);
        let history = document.createElement("h6")
        history.style.color = "red";
        history.innerHTML = userValueData[2] + " VS. " + botValue[0]
        hisList.appendChild(history)

    }
    else if (botValue[index] == "SCISSOR"){
        score.innerHTML = "YOU WIN"
        Uscore = Uscore + 1;
        YOUscore.innerHTML = Uscore;
        console.log(Uscore);
        let history = document.createElement("h6")
        history.style.color = "green";
        history.innerHTML = userValueData[2] + " VS. " + botValue[1]
        hisList.appendChild(history)
    }
    else {
        score.innerHTML = ""
    }
} 