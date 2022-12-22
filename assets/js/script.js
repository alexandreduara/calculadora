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
        if(digito == "." && this.operacaoAtualTexto.innerText.includes(".")){
            return;
        }

        this.operacaoAtual = digito
        this.atualizarTela()
    }
    
    processarOperacao(operacao){
        
        let valorOperacao 
        const anterior = +this.operacaoAnteriorTexto.innerText;
        const atual = +this.operacaoAtualTexto.innerText;

        switch (operacao) {
            case "+":
                valorOperacao = anterior + atual
                this.atualizarTela(valorOperacao, operacao, atual, anterior)
                break;
            default:
            case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "*":
                operationValue = previous * current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "/":
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous);
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