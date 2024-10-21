 /*funcion regulara, declarativa y se hace asi */


// funcionRegularDeclarativa()

// function funcionRegularDeclarativa(){
//  console.log('Esto Es Una Funcion Regular Declarativa')
// }
// funcionRegularDeclarativa()


/*funcion regular de exprecion */

// let funcionRegularDeExprecion=function(){
//  console.log(' Esto es una funcíon regular de expresíon')
// }
// funcionRegularDeExprecion()

/*funcion flecha de expresíon */

// let funcionflechaDeExpresion= () => {
//  console.log('Esto es una funcion flecha de expresion')
// }
// funcionflechaDeExpresion()

// function calcularSalario (valroHora, cantidadHoras){
//  let Salario = valroHora*cantidadHoras
//  console.log('su salario es: '+ Salario)
// }
// function cacularHorasExtras(cantidadHoras){
//      if(cantidadHoras > 46){
//      console.log('Usted tiene: '+ (cantidadHoras - 46) + ' Horas extras')

//      }
// }
// let valroHora = Number(prompt('ingrese el valor de la hora: '))
// let cantidadHoras = Number(prompt('ingrese la cantidad de horas: '))

// calcularSalario(valroHora, cantidadHoras)
// cacularHorasExtras(cantidadHoras)





// function calcularHorasExtras(cantidadHoras){
//      if(cantidadHoras> 92){
//            var horasExtras = cantidadHoras - 92         
//            return horasExtras
//      }else{
//           return 0
//      }
// }
// function calcularValorHorasExtras(cantidadHoras, valroHora){
//      let valroHoraExtra = valroHora * 1.25
//      return cantidadHoras * valroHoraExtra
// }
// function calcularSalarioBruto(cantidadHoras,valroHora){ /*sin deducciones */
//      let SalarioBruto = cantidadHoras * valroHora
//      return SalarioBruto
// }
// function calcularSalarioNeto(SalarioBruto, deducciones, valroHoraExtra){
//      console.log('el empleado tiene un salario bruto de: ' + SalarioBruto + ' con unas deducciones por valor de: '
//           + deducciones+' y un valor de horas extras de: '+ valroHoraExtra+ ' el salario neto a pagar es: '
//           + (SalarioBruto-deducciones+valroHoraExtra)
//      )

// }
// function calcularDeducciones(SalarioBruto){
// let deducciones = SalarioBruto * 0.08
// return deducciones
// }
// let cantidadHoras = 100
// let valroHora = 10000

// forma mas facil para hacer este ejercicio
//  let retornovalroHoraExtra = calcularValorHorasExtras(calcularHorasExtras(cantidadHoras), valroHora)

//  let retornoDeducciones = calcularDeducciones(calcularSalarioBruto(cantidadHoras,valroHora))

// let retornoSalarioBruto = (calcularSalarioBruto(cantidadHoras,valroHora))


// calcularSalarioNeto(calcularSalarioBruto(cantidadHoras,valroHora),
// calcularDeducciones(calcularSalarioBruto(cantidadHoras,valroHora)),
// calcularValorHorasExtras(calcularHorasExtras(cantidadHoras), valroHora))

// const funcionFlecha= ()=> {
//      console.log('esto es una funcion flecha')
// }
// let funcionflechaDeExpresion = function(){

// }
// function funcionflechaDeExpresion (){

// }
// funcionFlecha()
// funcionFlecha()
// funcionFlecha()


function estoEsUnaFuncion(funcionAnonima){
console.log('esto es una funcion regular')
}
estoEsUnaFuncion(()=>{
     console.log('esto es una funcion anonima flecha')
})
estoEsUnaFuncion(function() {
     console.log('esto es una funcion anonima regular')
})
estoEsUnaFuncion()
