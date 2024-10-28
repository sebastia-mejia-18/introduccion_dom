/* Selectores 
getElement
    getElementById -> Selecciona elemento por un id
    getElementsByClassName -> Selecciona elementos por clase
    getElementsByTagName -> Selecciona elemento por nombre de etiqueta
    
querySelector
    querySelector -> Permite seleccionar por id, por clase y por etiqueta
    querySelectorAll -> Permite seleccionar por id, por clase y por etiqueta
*/

// console.log(document.getElementById("usuario")) /* Solo muestra un elemento */
// console.log(document.getElementsByClassName("form")) /* Siempre muestra un arreglo */
// console.log(document.getElementsByTagName("form")) /* Siempre muestra un arreglo */

// console.log(document.querySelector("form"))
// console.log(document.querySelectorAll("form"))

import { buscarUsuario } from "../../../controller/ControllerUsuarios.js"
import { listarRecetasNoVegetarianas, listarRecetasVegetarianas } 
from "../../../controller/controllerProyectos.js"

let btnIniciar = document.querySelector('#btnIniciar')
   if(btnIniciar){
    btnIniciar.addEventListener('click', iniciarSesion)
    function iniciarSesion(){
        if (buscarUsuario()) {
            window.location.href = '/view/pages/home.html'
        } else {
            console.log('Error de credenciales')
        }

    }
   
}


document.getElementById('DiseñoWeb').addEventListener('click',()=>{
    listarRecetasVegetarianas()
})
document.getElementById('Back').addEventListener('click',()=>{
    listarRecetasNoVegetarianas()
})
document.getElementById('cerrar-Sesión').addEventListener('click',()=>{
    window.location.href='/index.html'
})




// let iniciarSesion = function () { /* Función de expresión */
//     let usuario = document.querySelector('#usuario')
//     let contrasena = document.querySelector('#contrasena')
//     console.log(usuario)
//     console.log(contrasena)
//     console.log('Iniciar Sesión')
// }
// iniciarSesion()




// console.log(usuario)