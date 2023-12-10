//URL del JSON de perfiles

const URL1 = 'json/perfil.json'
// me enlazo con los botones del perfil

const btnContratar = document.querySelector("button.button-contratar")
const btnperfil = document.querySelector("button.perfil")

// me enlazo con los elementos HTML del detalle del préstamo
const spanEdad = document.querySelector("span.label-edad")
const spanConocimiento = document.querySelector("span.label-conocimiento")
const spanAhorro = document.querySelector("span.label-ahorro") 
const spanDestino = document.querySelector("span.label-destino")
const spanTiempo = document.querySelector("span.label-tiempo")
const spanObjetivo = document.querySelector("span.label-objetivo")
const divMensajeFinal = document.querySelector("span.label-perfil")

//Recupero de local storage
function recuperarDeLS() {
    const datosDelPerfil = JSON.parse(localStorage.getItem("datosDelPerfil"))

    spanEdad.textContent =  datosDelPerfil.edad
    spanConocimiento.textContent = datosDelPerfil.conocimiento
    spanAhorro.textContent = datosDelPerfil.ahorro
    spanDestino.textContent = datosDelPerfil.destino
    spanTiempo.textContent = datosDelPerfil.tiempo
    spanObjetivo.textContent = datosDelPerfil.objetivo
    score = datosDelPerfil.score
}

// Analizo el perfil y emito el mensaje
function analizarPerfil(){
    const scoreLS = JSON.parse(localStorage.getItem("datosDelPerfil"))
    const scoreInv = scoreLS.score
    let mensaje = ""
  
    if (scoreInv <=6){
        const inversor = 0
       let mensaje = perfil.find((perfil) => perfil.id === inversor)
       
       divMensajeFinal.innerHTML = `"Su perfil de inversor es" ${mensaje.inversor} ${mensaje.recomendacion} `
        Swal.fire({
            text:`"Su perfil de inversor es" ${mensaje.inversor} ${mensaje.recomendacion} ` ,
            showConfirmButton: false,
            icon: "success",
            timer: 12500
        })
    }
    else if (scoreInv <= 12){
        const inversor = 1
        let mensaje = perfil.find((perfil) => perfil.id === inversor)
        
        divMensajeFinal.innerHTML = `"Su perfil de inversor es" ${mensaje.inversor} ${mensaje.recomendacion} `
        Swal.fire({
            text:`"Su perfil de inversor es" ${mensaje.inversor} ${mensaje.recomendacion} ` ,
            showConfirmButton: false,
            icon: "success",
            timer: 12500
        })
    }
    else if (scoreInv <= 18){
        const inversor = 2
        let mensaje = perfil.find((perfil) => perfil.id === inversor)
        divMensajeFinal.innerHTML = `"Su perfil de inversor es" ${mensaje.inversor} ${mensaje.recomendacion} `
        Swal.fire({
            text:`"Su perfil de inversor es" ${mensaje.inversor} ${mensaje.recomendacion} ` ,
            showConfirmButton: false,
            icon: "success",
            timer: 12500
        })
        
    }
    else if (scoreInv <= 24){
        const inversor = 3
        let mensaje = perfil.find((perfil) => perfil.id === inversor)
        divMensajeFinal.innerHTML = `"Su perfil de inversor es" ${mensaje.inversor} ${mensaje.recomendacion} `
        Swal.fire({
            text:`"Su perfil de inversor es" ${mensaje.inversor} ${mensaje.recomendacion} ` ,
            showConfirmButton: false,
            icon: "success",
            timer: 12500
        })
       
    }
    else{
      
        Swal.fire({
            text:"Los datos ingresados no son válidos" ,
            showConfirmButton: false,
            icon: "error",
            timer: 12500
        })
 }  
   
  }

// Busco el perfil en el archivo JSON
async function obtenerPerfil() {
    try {
      const response = await fetch(URL1)
        const data = await response.json()
       await perfil.push(...data)
       return data
    } catch (error) {
       console.error(error)
   }
}

 //Eventos
 btnContratar.addEventListener("click", ()=> {
    analizarPerfil()
    divMensajeFinal.classList.add("transition-div-show") 
    localStorage.clear()
})

btnperfil.addEventListener("click", ()=> {
    location.href = "index.html"
    localStorage.clear()
} )

 recuperarDeLS()
 obtenerPerfil()