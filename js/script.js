// Validación del formulario
let inputNombre = document.querySelector('#nombre')
let errorNombre = document.querySelector('#errorNombre')
const mensajeErrorNombre = "Error: por favor, escriba un nombre válido"

inputNombre.addEventListener('change', () => {

    let nombre = inputNombre.value.trim()

    if(nombre.length < 2) {
        inputNombre.value = ""
        errorNombre.innerHTML = mensajeErrorNombre
        inputNombre.setAttribute('aria-describedby', "errorNombre")        
        inputNombre.focus()
    }

})

let inputOpinion = document.querySelector('#opinion')
let errorOpinion = document.querySelector('#errorOpinion')
const mensajeErrorOpinion = "Por favor, necesitamos que escriba una opinión de al menos 20 carácteres"

inputOpinion.addeventlistener('change', () => {

    let opinion = inputOpinion.value.trim()

    if (opinion.length < 20){
        // inputOpinion.value = ""
        let inputOpinion
        errorOpinion.innerHTML = mensajeErrorOpinion
        inputOpinion.SetAtribute('aria-describedby', "errorOpinion")
        inputOpinion.focus()
    }
})