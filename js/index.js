//URL de los archivos JSON

const URL2 = 'json/edad.json'
const URL3 = 'json/conocimiento.json'
const URL4 = 'json/ahorro.json'
const URL5 = 'json/destino.json'
const URL6 = 'json/tiempo.json'
const URL7 = 'json/objetivo.json'

//Enlace DOM a elementos HTML

const selectEdad = document.querySelector("select#selectEdad")
const selectConocimiento = document.querySelector("select#selectConocimiento")
const selectAhorro = document.querySelector("select#selectAhorro")
const selectDestino = document.querySelector("select#selectDestino")
const selectTiempo = document.querySelector("select#selectTiempo")
const selectObjetivo = document.querySelector("select#selectObjetivo")
const btnCalcular = document.querySelector("button.button-calcular")
const btnperfil = document.querySelector("button.perfil")

//Cargar los select

function cargarEdad() {   
    if (edad.length > 0) {
        edad.forEach((edades)=> {
            selectEdad.innerHTML += `<option>${edades.rango}</option>`
        })
    }      
}
function cargarConocimiento() {
    if (conocimiento.length > 0) {
        conocimiento.forEach((conoc)=> {
            selectConocimiento.innerHTML += `<option>${conoc.rango}</option>`
        })
    }  
}
function cargarAhorro() {
    if (ahorro.length > 0) {
        ahorro.forEach((save)=> {
            selectAhorro.innerHTML += `<option>${save.rango}</option>`
        })
    }  
}
function cargarDestino() {
    if (destino.length > 0) {
        destino.forEach((inversion)=> {
            selectDestino.innerHTML += `<option>${inversion.rango}</option>`
        })
    }  
}
function cargarTiempo() {
    if (tiempo.length > 0) {
        tiempo.forEach((aguante)=> {
            selectTiempo.innerHTML += `<option>${aguante.rango}</option>`
        })
    }  
}
function cargarObjetivo() {
    if (objetivo.length > 0) {
        objetivo.forEach((obj)=> {
            selectObjetivo.innerHTML += `<option>${obj.rango}</option>`
        })
    }  
}

// Calculamos el perfil con los datos del HTML
function calcularPerfil(){
    let edadInformada = selectEdad.value 
    let conocimientoInformado = selectConocimiento.value
    let ahorroInformado = selectAhorro.value
    let destinoInformado = selectDestino.value
    let tiempoInformado = selectTiempo.value
    let objetivoInformado = selectObjetivo.value

    Toastify({
        text:  "Perfil correctamente ingresado✅",
        duration: 10000,
        style: {  }
    }).showToast()

    let scoreEdad = edad.find((age) => age.rango === edadInformada)
    let scoreConocimiento = conocimiento.find((know) => know.rango === conocimientoInformado)
    let scoreAhorro = ahorro.find((save) => save.rango === ahorroInformado)
    let scoreDestino = destino.find((invest) => invest.rango === destinoInformado)
    let scoreTiempo = tiempo.find((time) => time.rango === tiempoInformado)
    let scoreObjetivo = objetivo.find((obj) => obj.rango === objetivoInformado)

    let score = scoreEdad.valor + scoreConocimiento.valor + scoreAhorro.valor + scoreDestino.valor + scoreTiempo.valor + scoreObjetivo.valor
    
    guardarEnLS(edadInformada, conocimientoInformado,ahorroInformado,destinoInformado,tiempoInformado,objetivoInformado,score)
}

// Guardamos en Localstorage

function guardarEnLS(edad, conocimiento, ahorro, destino, tiempo, objetivo, score) {
    let datosDelPerfil = {
        edad: edad,
        conocimiento: conocimiento, 
        ahorro: ahorro,
        destino: destino,
        tiempo: tiempo,
        objetivo: objetivo,
        score: score
    }
    localStorage.setItem("datosDelPerfil", JSON.stringify(datosDelPerfil))
}

// Busco los arrays de los select en los archivos JSON
async function obtenerEdad() {
    try {
      const response = await fetch(URL2)
        const data = await response.json()
       await edad.push(...data)
       cargarEdad(edad)
       return edad
    } catch (error) {
       console.error(error)
   }
}
async function obtenerConocimiento() {
    try {
      const response = await fetch(URL3)
        const data = await response.json()
       await conocimiento.push(...data)
       cargarConocimiento(conocimiento)
       return conocimiento
    } catch (error) {
       console.error(error)
   }
}
async function obtenerAhorro() {
    try {
      const response = await fetch(URL4)
        const data = await response.json()
       await ahorro.push(...data)
       cargarAhorro(ahorro)
       return ahorro
    } catch (error) {
       console.error(error)
   }
}
async function obtenerDestino() {
    try {
      const response = await fetch(URL5)
        const data = await response.json()
       await destino.push(...data)
       cargarDestino(destino)
       return destino
    } catch (error) {
       console.error(error)
   }
}
async function obtenerTiempo() {
    try {
      const response = await fetch(URL6)
        const data = await response.json()
       await tiempo.push(...data)
       cargarTiempo(tiempo)
       return tiempo
    } catch (error) {
       console.error(error)
   }
}
async function obtenerObjetivo() {
    try {
      const response = await fetch(URL7)
        const data = await response.json()
       await objetivo.push(...data)
       cargarObjetivo(objetivo)
       return tiempo
    } catch (error) {
       console.error(error)
   }
}

//Eventos
btnCalcular.addEventListener("click", ()=> calcularPerfil() )
btnperfil.addEventListener("click", ()=> location.href = "perfil.html" )
obtenerEdad()
obtenerConocimiento()
obtenerAhorro()
obtenerDestino()
obtenerTiempo()
obtenerObjetivo()
cargarEdad()
cargarAhorro()
cargarConocimiento()
cargarDestino()
cargarObjetivo()
cargarTiempo()