const menubutton = document.querySelector(".menubutton")
const menuopcoes = document.querySelector(".menuopcoes")

const linkAmbientes = document.querySelector("#barraambientes")
const menuAmbientes = document.querySelector(".menuambientes")

menubutton.addEventListener("click", function () {
  menuopcoes.classList.toggle("active")

  if (!menuopcoes.classList.contains("active")) {
    menuAmbientes.classList.remove("active")
  }
})

linkAmbientes.addEventListener("click", function (event) {
  event.preventDefault()
  menuAmbientes.classList.toggle("active")
})

document.addEventListener("click", function (event) {
  const clicouNoBotao = menubutton.contains(event.target)
  const clicouNoMenu = menuopcoes.contains(event.target)

  if (!clicouNoBotao && !clicouNoMenu) {
    menuopcoes.classList.remove("active")
    menuAmbientes.classList.remove("active")
  }
})
