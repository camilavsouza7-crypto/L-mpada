const loginForm = document.getElementById("loginForm");

const mensagem = document.getElementById("mensagem");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;


    if (usuario !== "" && senha !== "") {

        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.style.color = "green";

    
        setTimeout(function () {

            window.location.href = "./index.html";

        }, 1000);

    } else {

        mensagem.textContent = "Preencha o usuário e a senha!";
        mensagem.style.color = "red";

    }

});