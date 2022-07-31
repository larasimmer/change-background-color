//DECLARANDO VARIÁVEIS

const botao = $("#btn");
const color = $(".color");
//let currentColor = $(".color").css("background-color");
let colors = ["red", "green"];//, "pink", "orange", "black", "yellow", "brown"];
let randomColor;


//CHAMANDO FUNÇÕES

botao.on("click", changeColor);

//DECLARANDO FUNÇÕES

function findingRandomColor() {
    randomColor = Math.floor(Math.random() * colors.length);
    //if (currentColor == randomColor) {
        //randomColor = Math.floor(Math.random() * colors.length) + 1;
    //}
    console.log(colors);
    //console.log(currentColor);
}

function changeColor() {
    findingRandomColor();
    color.css("background-color", colors[randomColor]);
    //currentColor = colors[randomColor];
    console.log(colors[randomColor]);
}