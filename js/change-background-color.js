//DECLARANDO VARIÁVEIS

const botao = $("#btn");
const color = $(".color");
let currentColor = $(".color").css("background-color");
let colors = ["red", "green", "pink", "orange", "black", "yellow", "brown", "gray", "purple", "blue"];
let randomColor;

//CHAMANDO FUNÇÕES

botao.on("click", findingRandomColor);

//DECLARANDO FUNÇÕES

function findingRandomColor() {
    randomColor = Math.floor(Math.random() * colors.length);
    while (colors[randomColor] == currentColor) {
        randomColor = Math.floor(Math.random() * colors.length);
    }
    changeColor();
}

function changeColor() {
    color.css("background-color", colors[randomColor]);
    currentColor = colors[randomColor]; 
}