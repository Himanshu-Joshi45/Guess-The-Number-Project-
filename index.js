let ComputerGuess;
let userGuess = [];
let userGuessUpadate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio('movement-swipe-whoosh-3-186577.mp3');
let init = () =>{
    ComputerGuess = Math.floor(Math.random()*100);
    console.log(ComputerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};
const newGameBegin = () =>{
    audio.play();
    window.location.reload();
}
const startGame = () =>{
    document.getElementById("WelcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
};
const startNewGame = () =>{
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled",true);
}
const compareGuess = () => {
    audio.play();
    const userNumber =  Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guess").innerHTML = userGuess;

    if(userGuess.length < maxGuess){
        if(userNumber > ComputerGuess){
    userGuessUpadate.innerHTML = "Your guess is High 😮	"
    userNumberUpdate.value =" ";
}
else if(userNumber < ComputerGuess){
    userGuessUpadate.innerHTML = "Your guess is Low  🙁";
    userNumberUpdate.value =" ";

}
else{
    userGuessUpadate.innerHTML = "It's Correct 🙂";
    userNumberUpdate.value =" ";
    startNewGame();
}
}else{
    if(userNumber > ComputerGuess){
        userGuessUpadate.innerHTML = `You Loose !! correct number was ${ComputerGuess}`;
        userNumberUpdate.value =" ";
        startNewGame();
    }
    else if(userNumber < ComputerGuess){
        userGuessUpadate.innerHTML = `You Loose !! correct number was ${ComputerGuess}`;
        userNumberUpdate.value =" ";
        startNewGame();
    }
    else{
        userGuessUpadate.innerHTML = "It's Correct 🙂";
        userNumberUpdate.value =" ";
      startNewGame();
    }
    }
    document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
    audio.play();
    maxGuess = 10;
    startGame();
};
const hardMode = () => {
    audio.play();
    maxGuess = 5;
    startGame();
};



