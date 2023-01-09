let div1, div2, div3, div4;
window.addEventListener("load", iniciar);

function iniciar() {
    div1 = document.getElementById("div1");
    div2 = document.getElementById("div2");
    div3 = document.getElementById("div3");
    div4 = document.getElementById("div4");
    div1.addEventListener("mouseover", trocar);
    div1.addEventListener("mouseout", trocarOriginal);
    div2.addEventListener("mouseover", trocar);
    div2.addEventListener("mouseout", trocarOriginal);
    div3.addEventListener("mouseover", trocar);
    div3.addEventListener("mouseout", trocarOriginal);
    div4.addEventListener("mouseover", trocar);
    div4.addEventListener("mouseout", trocarOriginal);
}

function trocar() {
    let objeto = event.target;
    objeto.style.backgroundImage = "url('c2.png')";
}

function trocarOriginal() {
    let objeto = event.target;
    objeto.style.backgroundImage = "url('c1.png')";
}