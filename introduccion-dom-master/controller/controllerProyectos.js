import { recetasVegetarianas, recetasNoVegetarianas } from "../model/modelPryectos.js";





export function listarRecetasVegetarianas() {
  document.getElementById('contenido').innerHTML=''
  recetasVegetarianas.map((recetasVegetarianas)=>{
 
  })
 
recetasVegetarianas.map((recetasVegetarianas)=>{
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
 tipo.textContent = 'Tipo '+ recetasNoVegetarianas.tipo
 contenedor.append(nombre,ingredientes,tiempo,dificultad,tipo)
 document.getElementById('contenido').append(contenedor)
 })
}





export function listarRecetasNoVegetarianas() {
 document.getElementById('contenido').innerHTML=''
 recetasNoVegetarianas.map((recetasNoVegetarianas)=>{
 
  })
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
  tipo.textContent = 'Tipo '+ recetasNoVegetarianas.tipo
  contenedor.append(nombre,ingredientes,tiempo,dificultad,tipo)
  document.getElementById('contenido').append(contenedor)
  })
}