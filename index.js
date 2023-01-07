//divs con una clase cada uno con una clase que se le aplique al div y un id por cada div
var fail = new Audio("fail.mp3"); //sonido de fallo
var win = new Audio("win.mp3"); //sonido de victoria
var scores = 0;
var checkAI = 0;
let file = document.getElementById("file");
var number = document.getElementById("number");
var fails = document.getElementById("fails");
var score = document.getElementById("score");
var fail = 0;
var NumberRandom = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
var check = document.getElementById("check");
var intervalID;
var repeatNumber = 20; //Numero de botones que se van a crear
var counter2 = 0; 
var counter = 0;
var BtnClick = 0;
var BtnClick2 = 0;
var more = document.getElementById("more"); //boton de mas botones
var ShowMoves = document.getElementById("ShowMoves");
ShowNumbers.disabled = true;
check.disabled = true;
// Function to call repeatedly
function AiBot() {
  GerateNumber.click();
  for (let i = 0; i < repeatNumber; i++) {
    document.getElementById("div" + i).click
    check.click();
  }
}
function start() {
  intervalID = setInterval(AiBot, 500);

}
// Function to stop setInterval call
function stop() {
  clearInterval(intervalID);
}
// Function to start setInterval call
check.onclick = function () { //evento de click en el boton de checar
  if (checkAI == 0) {
    check.click();
    checkAI = 1;
    start();
    if (checkAI == 1) {
      for (let i = 0; i < repeatNumber; i++) {
        if (document.getElementById("div" + i).innerHTML == NumberRandom) {
          document.getElementById("div" + i).click();
          setTimeout(function () {
            document.getElementById("div" + i).style.display = "none";
          }, 500);
        }
      }
    }
    for (let i = 0; i < repeatNumber; i++) {
      if (document.getElementById("div" + i).innerHTML == NumberRandom) {
        document.getElementById("div" + i).style.backgroundColor = "green";
      }

    }
  }
  else {
    checkAI = 0;
    stop();
  }

};
 

ShowNumbers.onclick = function () { //evento de click en el boton de mostrar numeros
  if (BtnClick == 0) {
    for (let i = 0; i < repeatNumber; i++) {
      BtnClick = 1;
      ShowNumbers.innerHTML = "Show Numbers";
      document.getElementById("div" + i).style.color = "transparent";
    }
  } else {
    for (let i = 0; i < repeatNumber; i++) {
      BtnClick = 0;
      ShowNumbers.innerHTML = "Hide Numbers";
      document.getElementById("div" + i).style.color = "#000";
    }
  }
};
more.onclick = function () { //evento de click en el boton de mas botones
  repeatNumber += 20;
  more.innerHTML = "Circles<br>" + `${repeatNumber}`;
}

const StartGame = () => { //funcion que inicia el juego
  ShowNumbers.disabled = false;
  for (var i = 0; i < repeatNumber; i++) {
    var div = document.createElement("button");
    var randomnumer = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    counter2 = repeatNumber; 
    counter = repeatNumber;
    document.body.appendChild(div);
    div.style.width = `${70}` + `px`;	//`${i}px`
    div.style.height = `${70}` + `px`; //`${i}px`
    div.style.fontSize = `${30}` + `px`; //`${i}px`
    div.style.margin = `${5}` + `px`; //`${i}px`
    div.classList.add("div"); //añade la clase div a los divs
    div.value = randomnumer;
    more.disabled = true;
    check.disabled = false;
    more.style.backgroundColor = "red";

    ShowMoves.onclick = function () { //evento de click en el boton de mostrar numeros
      if (BtnClick2 == 0) {
        for (let i = 0; i < repeatNumber; i++) {
          document.getElementById("div" + i).style.backgroundColor = "#fdd807";
          BtnClick2 = 1;
          ShowMoves.innerHTML = "Hide Moves";
        }
      } else {
        for (let i = 0; i < repeatNumber; i++) {
          BtnClick2 = 0;
          ShowMoves.innerHTML = "Show Moves";
        }
      }
      if (checkAI == 1) {
        for (let i = 0; i < repeatNumber; i++) {
          if (document.getElementById("div" + i).innerHTML == NumberRandom) {
            document.getElementById("div" + i).style.backgroundColor = "green";
            setTimeout(function () {
              document.getElementById("div" + i).style.display = "none";
            }, 500);
          }
        }
      }
      for (let i = 0; i < repeatNumber; i++) {
        if (document.getElementById("div" + i).innerHTML == NumberRandom) {
          document.getElementById("div" + i).style.backgroundColor = "green";
        }
        if (BtnClick2 == 0) {
          document.getElementById("div" + i).style.backgroundColor = "#fdd807";
        }
      }
    };
    GerateNumber.onclick = function () { //evento de click en el boton de generar numeros
      ShowMoves.innerHTML = "Show Moves";
      for (let i = 0; i < repeatNumber; i++) {
        document.getElementById("div" + i).style.backgroundColor = "#fdd807"
        randomnumer = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        document.getElementById("div" + i).value = randomnumer;
        document.getElementById("div" + i).innerHTML = `${randomnumer}`;
        number.textContent = `Number: ${NumberRandom}`;
      }
    }
    div.style.boxShadow = `inset 2px 2px 2px 4px  rgba(0, 0, 0, 0.5)`;
    div.setAttribute("id", "div" + i);
    let rbotones = "div" + i;
    document.getElementById(rbotones).innerHTML = `${randomnumer}`;
  
    const container = document.querySelector(".container");
    container.appendChild(div);
    number.textContent = `Number: ${NumberRandom}`;
    fails.textContent = `Fails: ${fail}`;
    div.onclick = function () {
      this.style.zoom = "0.9";
      if (document.getElementById(rbotones).value == `${NumberRandom}`) { //si el numero del boton es igual al numero generado
        // win.play(); 
        this.style.backgroundColor = "green";
        //console.log("correcto");
        scores++;
        file.max = `${repeatNumber}`;
        file.value = `${scores}`;
        counter--;
        file.innerHTML = `${scores}`;
        score.innerHTML = `Score: ${scores}`;
        document.getElementById(rbotones).disabled = true;
        setTimeout(function () {
          document.getElementById(rbotones).style.display = "none";
        }, 500);
      }
      else {
        // fail.play();
        fail++;
        counter--;
        
        console.log(counter);
        fails.textContent = `Fails: ${fail}`;
        this.style.backgroundColor = "red";
        document.getElementById(rbotones).disabled = true;
        setTimeout(function () {
          document.getElementById(rbotones).style.display = "none";
        }, 500);
        //console.log("incorrecto");
      }  if (counter == 0 && file.value == repeatNumber) {
        document.getElementById("you_win").innerHTML = "You Win";
        stop();
        //reiniciar pagina 
        setTimeout(function () {
          location.reload();
        }, 3000);
      }else if (counter == 0 && file.value != repeatNumber) {
        document.getElementById("you_win").innerHTML = "You Lose";
        stop();
        //reiniciar pagina
        setTimeout(function () {
          location.reload();
        } , 3000);
      }

    }

  }
}



