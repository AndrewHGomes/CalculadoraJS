var momento;
var op1;
var op2;
var resultado;
var operacao;

let calculadora = {
    numArray: new Array(),

    inicializacao: function () {
        momento = "inicializado";
        this.display();
    },
    adicao: function () {
        operacao = 'adicao';
        momento = 'operando2';
        this.numArray = [];
    },
    subtracao: function () {
        operacao = 'subtracao';
        momento = 'operando2';
        this.numArray = [];
    },
    divisao: function () {
        operacao = 'divisao';
        momento = 'operando2';
        this.numArray = [];
    },
    multiplicacao: function () {
        operacao = 'multiplicacao';
        momento = 'operando2';
        this.numArray = [];
    },
    ac: function () {
        calculadora.inicializacao();
        this.numArray = [];
    },
    del: function () {
        this.numArray.pop();
        this.proximoNum();
        this.display;
    },
    igual: function () {
        switch (operacao) {
            case "adicao":
                resultado = op1 + op2;
                momento = "resultado";
                op1 = resultado;
                this.display();
                break;
            case "subtracao":
                resultado = op1 - op2;
                momento = "resultado";
                op1 = resultado;
                this.display();
                break;
            case "multiplicacao":
                resultado = op1 * op2;
                momento = "resultado";
                op1 = resultado;
                this.display();
                break;
            case 'divisao':
                resultado = op1 / op2;
                momento = "resultado";
                op1 = resultado;
                this.display();
                break;
        } console.log(resultado)
    },
    display: function () {
        switch (momento) {
            case "inicializado":
                document.getElementById("display").innerHTML = "Display";
                momento = "operando1";
                break;
            case "operando1":
                document.getElementById("display").innerHTML = op1;
                break;
            case "operando2":
                document.getElementById("display").innerHTML = op2;
                break;
            case "resultado":
                document.getElementById("display").innerHTML = resultado;
                momento = "operando1";
                break;

        }
    },

    proximoNum: function (valor) {
        console.log(momento)
        switch (momento) {
            case "operando1":
                this.numArray.push(valor);
                op1 = parseFloat(this.numArray.join(''));
                this.display();
                break;
            case "operando2":
                this.numArray.push(valor);
                op2 = parseFloat(this.numArray.join(''));
                this.display();
                break;
        }
    }


}