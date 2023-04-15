let btnDefinir = document.querySelector("#btnNum")

function cadastrarUsuarios() {
    let usuarios = document.querySelector("#numUsu")
    let numeroUsu = usuarios.value
    let areaCadastro = document.querySelector(".areaCadastrar")
    let contador = 1

    if (!areaCadastro.classList.contains("block")) {
        console.log("Bloqueio")

        areaCadastro.innerHTML += "<h3 class='legendaCadastro'>Digite o nome e o telefone dos usuários que deseja cadastrar:</h3>"

        for (contador = 1; contador <= numeroUsu; contador++) {
            areaCadastro.innerHTML += "<p>Usuário " + contador + " <input type='text' id='inputNome'</p> Telefone <input type='tel' id=inputTel> "
        }
        areaCadastro.style.border = "2px solid blue"
        areaCadastro.innerHTML += "<input type='submit' id='enviar' value='Enviar'>"
        areaCadastro.classList.add("block")
    }
}



btnDefinir.addEventListener("click", cadastrarUsuarios)