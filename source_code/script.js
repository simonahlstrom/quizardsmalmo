// VARIABLES

let keys = [
  "homePage",
  "story",
  "about",
  "gameDay",
  "contact"
]

let infoText = [
  {button: "instructions", content: "Syftet med spelet är att på utsatt tid tillsammans med ditt hus samla så många poäng som möjligt genom att svara på frågor. Frågorna består av gåtor, pussel, platsspecifika frågor (frågor som ni enbart kan svara på genom att besöka en särskild plats) och flersvarsfrågor. De olika kategorierna ger olika poäng. Självklart har du i sann trollkarlsanda din spellbook till hands och kan med hjälp av olika trollformler försvåra för de andra husen eller ge fördel för dig och ditt hus. Precis som i trollkarlsvärlden kan du i quizardvärlden utöka dina förmåga och därmed få mer kraftfulla formler genom att svara på frågor och  samla ihop poäng."},
  {button: "register", content: "Registrera dig genom att klicka HÄR!"},
  {button: "covid", content: "Information om hur spelet kommer hantera den rådande samhällsituationen beroende på Covid-19"}
]
let textBox = document.querySelector("#infoBox")
let buttons = document.querySelectorAll(".buttonContainer > div")

let pages = document.querySelectorAll(".page")
let secondPages = document.querySelectorAll(".secondPage")
let sections = document.querySelectorAll("section")

// FUNCTIONS

function navigate(next) {
  sections.forEach((sec) => {
    sec.classList.remove("default")
  })
  document.querySelector(`#${next}`).classList.add("default")
}

function menu() {
  let x = document.querySelector("#mobileMenu")
    if (x.style.display === "block") {
      x.style.display = "none"
    } else {
      x.style.display = "block"
    }
} 

// EVENT HANDLERS

document.querySelector("#hamburger").addEventListener("click", () => {
  menu()
})

// DIRECT CODE

pages.forEach((el, index) => {
  el.value = keys[index]
    el.addEventListener("click", (e) => {
      navigate(e.target.value)
      // menu()
    })
})

secondPages.forEach((el, index) => {
  el.value = keys[index + 1]
    el.addEventListener("click", (e) => {
      navigate(e.target.value)
      // menu()
    })
})

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    while (textBox.firstChild) textBox.removeChild(textBox.firstChild);
    
    infoText.forEach((info) => {
      let clicked = e.target
      let el = document.createElement("p")
      if (clicked.id == info.button) {
        el.append(info.content)
        textBox.append(el)
      }
    })
  })
})

navigate("homePage")