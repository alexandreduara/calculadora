const operacaoAnteriorTexto = document.querySelector(".operacao__anterior");
const operacaoAtualTexto = document.querySelector(".operacao__atual");
const botoes = document.querySelectorAll(".botoes button")


class Calculadora{
    constructor(operacaoAnteriorTexto, operacaoAtualTexto){
        this.operacaoAtualTexto = operacaoAtualTexto
        this.operacaoAnteriorTexto = operacaoAnteriorTexto
        this.operacaoAtual = ""
    }

    addDigito(digito){
        if(digito == "." && this.operacaoAtualTexto.innerText.includes(".") || this.operacaoAtualTexto.innerText.length >= 12){
            return;
        }

        this.operacaoAtual = digito
        this.atualizarTela()
    }
    
    maxlength = "6"
    processarOperacao(operacao){

        if(this.operacaoAtualTexto.innerText === ""  && operacao !== "C"){
            if(this.operacaoAnteriorTexto.innerText !== ""){
                this.mudarOperação(operacao);
            }
            return;
        }
        
        let valorOperacao 
        const anterior = +this.operacaoAnteriorTexto.innerText.split(" ")[0];
        const atual = +this.operacaoAtualTexto.innerText;

        switch (operacao) {
            case "+":
                valorOperacao = anterior + atual
                this.atualizarTela(valorOperacao, operacao, atual, anterior)
                break;
            default:
            case "-":
                valorOperacao = anterior - atual;
                this.atualizarTela(valorOperacao , operacao, atual, anterior);
                break;
            case "*":
                valorOperacao = anterior * atual;
                this.atualizarTela(valorOperacao, operacao, atual, anterior);
                break;
            case "/":
                valorOperacao  = anterior / atual;
                this.atualizarTela(valorOperacao, operacao, atual, anterior);
                break;
            case "DEL":
                this.operacaoDeletar();
                break;
            case "CE":
                this.operacaoLimpar();
                break;
            case "C":
                this.operacaoLimparTudo();
                break;
            case "=":
                this.operacaoIgual();
                break;
                return;

        }

    }



    atualizarTela(
        valorOperacao = null,
        operacao= null,
        atual = null,
        anterior = null
    )   {

        console.log(valorOperacao, operacao, atual, anterior);

        if (valorOperacao === null){
            this.operacaoAtualTexto.innerText += this.operacaoAtual;
        }
        else{
            if (anterior === 0){
                valorOperacao = atual
            }
            this.operacaoAnteriorTexto.innerText = `${valorOperacao} ${operacao}`
            this.operacaoAtualTexto.innerText = "";
        }
    }

    mudarOperação(operacao){
        const operacoesMatematicas = ["*", "/", "+", "-"]

        if(!operacoesMatematicas.includes(operacao)){
            return
        }

        this.operacaoAnteriorTexto.innerText = this.operacaoAnteriorTexto.innerText.slice(0, -1) + operacao
    }

    operacaoDeletar(){
        this.operacaoAtualTexto.innerText = this.operacaoAtualTexto.innerText.slice(0, -1)
    }

    operacaoLimpar(){
        this.operacaoAtualTexto.innerText = "";
    }

    operacaoLimparTudo(){
        this.operacaoAtualTexto.innerText = "";
        this.operacaoAnteriorTexto.innerText = "";
    }

    operacaoIgual(){
        const operacao = operacaoAnteriorTexto.innerText.split(" ")[1]

        this.processarOperacao(operacao);

        this.operacaoAtualTexto.innerText = this.operacaoAnteriorTexto.innerText.split(" ")[0];
        this.operacaoAnteriorTexto.innerText = "";
    }
}



const calc = new Calculadora(operacaoAnteriorTexto, operacaoAtualTexto)

botoes.forEach((btn) => {
    btn.addEventListener("click", (e) =>{

        const value = e.target.innerText;

        if(value >= 0 || value === "."){
            calc.addDigito(value)
        }
        else{
            calc.processarOperacao(value)
        }

    })
})

var botaoDeletar = documente.querySelector(".botao__deletar")
function deletar(){
    console.log('DEL')
}