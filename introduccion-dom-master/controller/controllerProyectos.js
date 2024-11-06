import { recetasVegetarianas, recetasNoVegetarianas } from "../model/modelPryectos.js";


export function listarRecetasVegetarianas() {
  document.getElementById('contenido').innerHTML=''
recetasVegetarianas.map((recetasVegetariana)=>{
 let contenedor = document.createElement('div')
 let nombre =document.createElement('p')
 let ingredientes = document.createElement('ul')
 let tiempo = document.createElement('p')
 let dificultad = document.createElement('p')
 let tipo = document.createElement('p')
 nombre.textContent ='Nombre ' + recetasVegetariana.nombre
 ingredientes.textContent ='Ingredientes ' + recetasVegetariana.ingredientes
 tiempo.textContent = 'Tiempo de preparacion ' + recetasVegetariana.tiempo
 dificultad.textContent ='Dificultad ' + recetasVegetariana.dificultad
 tipo.textContent = 'Tipo '+ recetasVegetariana.tipoComida
 contenedor.append(nombre,ingredientes,tiempo,dificultad,tipo)
 document.getElementById('contenido').append(contenedor)
 })
}


export function listarRecetasNoVegetarianas() {
  document.getElementById('contenido').innerHTML=''
  recetasNoVegetarianas.map((recetasNoVegetarianas)=>{
   let contenedor = document.createElement('div')
   let nombre =document.createElement('p')
   let ingredientes = document.createElement('ul')
   let tiempo = document.createElement('p')
   let dificultad = document.createElement('p')
   let tipo = document.createElement('p')
   nombre.textContent ='Nombre ' + recetasNoVegetarianas.nombre
   ingredientes.textContent ='Ingredientes ' + recetasNoVegetarianas.ingredientes
   tiempo.textContent = 'Tiempo de preparacion ' + recetasNoVegetarianas.tiempo
   dificultad.textContent ='Dificultad ' + recetasNoVegetarianas.dificultad
   tipo.textContent = 'Tipo '+ recetasNoVegetarianas.tipoComida
   contenedor.append(nombre,ingredientes,tiempo,dificultad,tipo)
   document.getElementById('contenido').append(contenedor)
   })
 }

export function FiltrarPorNombre(value){
let recetas = recetasVegetarianas.filter((recetasVegetarianas) => 
  recetasVegetarianas.nombre==value)
crearRecetasPorNombre(recetas)

}

function crearRecetasPorNombre(recetas){
  document.getElementById('contenido').innerHTML=''
  recetas.map((recetasVegetarianas)=>{
   let contenedor = document.createElement('div')
   let nombre =document.createElement('p')
   let ingredientes = document.createElement('ul')
   let tiempo = document.createElement('p')
   let dificultad = document.createElement('p')
   let tipo = document.createElement('p')
   nombre.textContent ='Nombre ' + recetasVegetarianas.nombre
   ingredientes.textContent ='Ingredientes ' + recetasVegetarianas.ingredientes
   tiempo.textContent = 'Tiempo de preparacion ' + recetasVegetarianas.tiempo
   dificultad.textContent ='Dificultad ' + recetasVegetarianas.dificultad
   tipo.textContent = 'Tipo '+ recetasVegetarianas.tipoComida
   contenedor.append(nombre,ingredientes,tiempo,dificultad,tipo)
   document.getElementById('contenido').append(contenedor)
   })
 }


export function filtrarPorTipo(value){
  let recetas = recetasVegetarianas.filter((recetasVegetarianas) => 
    recetasVegetarianas.tipoComida==value)
  crearRecetasPorTipo(recetas)
}

function crearRecetasPorTipo(tipoComida){
  document.getElementById('contenido').innerHTML=''
  tipoComida.map((recetasVegetarianas)=>{
   let contenedor = document.createElement('div')
   let nombre =document.createElement('p')
   let ingredientes = document.createElement('ul')
   let tiempo = document.createElement('p')
   let dificultad = document.createElement('p')
   let tipo = document.createElement('p')
   nombre.textContent ='Nombre ' + recetasVegetarianas.nombre
   ingredientes.textContent ='Ingredientes ' + recetasVegetarianas.ingredientes
   tiempo.textContent = 'Tiempo de preparacion ' + recetasVegetarianas.tiempo
   dificultad.textContent ='Dificultad ' + recetasVegetarianas.dificultad
   tipo.textContent = 'Tipo '+ recetasVegetarianas.tipoComida
   contenedor.append(nombre,ingredientes,tiempo,dificultad,tipo)
   document.getElementById('contenido').append(contenedor)
   })

}

export function FiltrarPorDificultad(value) {
  let recetas = recetasVegetarianas.filter((recetasVegetarianas) => 
    recetasVegetarianas.dificultad==value)
  crearRecetasPorTipo(recetas)
  
}

