let clicou = false;

function mostrarMensagem() {
  if (!clicou) {
    alert("Olá! Você clicou no botão.");
    clicou = true;
  } else {
    alert("EU AVISEI PARA NÃO CLICAR DE NOVO...");
    entrarEmTelaCheia();
    iniciarVirusFake();
    iniciarTerror();
  }
}

function iniciarVirusFake() {
  setInterval(() => {
    criarJanelaErro();
    tocarSomErro();
  }, 100);
}

function criarJanelaErro() {
  const janela = document.createElement("div");
  janela.className = "janela";

  const titulo = document.createElement("h3");
  titulo.innerText = "SISTEMA COMPROMETIDO";

  const mensagem = document.createElement("p");
  mensagem.innerText = "VOCÊ ESTÁ SENDO OBSERVADO...";

  janela.appendChild(titulo);
  janela.appendChild(mensagem);

  janela.style.top = Math.random() * (window.innerHeight - 180) + "px";
  janela.style.left = Math.random() * (window.innerWidth - 300) + "px";

  document.body.appendChild(janela);
}

function tocarSomErro() {
  const som = document.getElementById("erroSom");
  som.volume = 1.0;
  som.currentTime = 0;
  som.play();
}

function iniciarTerror() {
  const scream = document.getElementById("scream");
  scream.volume = 1.0;
  scream.play();

  moverJumpscareAleatorio();

  setInterval(() => {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "black" ? "darkred" : "black";
  }, 200);
}


function entrarEmTelaCheia() {
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    e.preventDefault();
    alert("Saída bloqueada! Pressione F11 para sair da tela cheia.");
  }
});


function moverJumpscareAleatorio() {
  const jumpscare = document.getElementById("jumpscare");
  jumpscare.style.display = "block";

  setInterval(() => {
    const maxTop = window.innerHeight - jumpscare.offsetHeight;
    const maxLeft = window.innerWidth - jumpscare.offsetWidth;

    const novaTop = Math.random() * maxTop;
    const novaLeft = Math.random() * maxLeft;

    jumpscare.style.top = `${novaTop}px`;
    jumpscare.style.left = `${novaLeft}px`;
  }, 200);
}

