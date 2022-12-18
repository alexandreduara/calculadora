const buttonBranco = document.querySelector (".botao__tema--tema1");
const buttonPreto = document.querySelector (".botao__tema--tema2");
const buttonRosa = document.querySelector (".botao__tema--tema3");
const buttonLaranja = document.querySelector (".botao__tema--tema4");
const root = document.querySelector(":root");

buttonBranco.addEventListener("click", () => {
        root.classList.toggle("tema__branco");
});

buttonPreto.addEventListener('click', () => {
        const root = document.querySelector(":root");
        root.classList.toggle("tema__preto");
});