const buttonBranco = document.querySelector (".botao__tema--tema1");
const buttonPreto = document.querySelector (".botao__tema--tema2");
const buttonRosa = document.querySelector (".botao__tema--tema3");
const buttonLaranja = document.querySelector (".botao__tema--tema4");
const root = document.querySelector(":root");

buttonBranco.addEventListener("click", () => {
        root.classList.remove("tema__rosa");
        root.classList.remove("tema__laranja");
        root.classList.remove("tema__preto");
        root.classList.add("tema__branco");
});

buttonPreto.addEventListener('click', () => {
        root.classList.remove("tema__rosa");
        root.classList.remove("tema__laranja");
        root.classList.remove("tema__branco");
        root.classList.add("tema__preto");
});

buttonLaranja.addEventListener('click', () => {
        root.classList.remove("tema__rosa");
        root.classList.remove("tema__preto");
        root.classList.remove("tema__branco");
        root.classList.add("tema__laranja");
});

buttonRosa.addEventListener('click', () => {
        root.classList.remove("tema__preto");
        root.classList.remove("tema__laranja");
        root.classList.remove("tema__branco");
        root.classList.add("tema__rosa");
});