//let heroes = require('./superheroes');
//let autos = require('./autos');


//


//let sumar = (numero1, numero2) => numero1 + numero2;
//let resta = (numero1, numero2) => numero1 - numero2;
//let multiplicaion = (numero1, numero2) => numero1 * numero2;
//let division = (numero1, numero2) => numero1 / numero2;

//let calculadora = (numero1, numero2, opreacion) => opreacion(numero1,numero2);

//console.log(calculadora(10,5,multiplicaion))

//let numeros = [2,4,6];


//let dobleDeLosNumeros = numeros.map(function(unNumero){
 //return unNumero * 2;
//});


//console.log(dobleDeLosNumeros);

//let numeros = [5,7,16];

//let resultado = numeros.reduce(function(acumulador,numero) {
  //  return acumulador + numero;
//});

//console.log(resultado)

//const autos = require('./autos');

// let autos = [
//     {marca:"Ford", modelo: "Fiesta", precio: 150000, km:200, color: "Azul", cuotas: 12, anio: 2019, patente:"APL123", vendido: false},
//     {marca:"Toyota", modelo: "Corolla", precio: 100000, km:0, color: "Blanco", cuotas: 14, anio: 2019, patente:"JJK116", vendido: false}
// ];




// const concesionaria = {
//     autos: autos,
//          buscarAuto: function(patente) {
//     for (let i = 0; i < autos.length; i++) {
//       if (autos[i].patente == patente) {
//         return autos[i]
//       }else
//       return null;
//     }
//   },
//     buscarPorPatente: function(patente){
//         for(i = 0; i < autos.lenght; i++){
//             if(autos[i].patente == patente){
//                 return autos[i];
//             }
//         }
//     },
//     venderAuto: function(patente) {
//         const auto = this.buscarAuto(patente);
//         if(auto){
//            auto.vendido = true;
//         } else {
//            console.log("caigo por otro lado")}
//     },
//        autosParaLaVenta: function(){
//           return auto = this.autos.filter(function(elemento){
//              return !elemento.vendido;
//           })
//        }, autosNuevos: function () {
//         let carro = this.autosParaLaVenta().filter(function (auto) {
//             return autos.km < 100
//         });
//         return carro;
//     },
          
       
// };


// //console.log(concesionaria.autos)
// console.log(concesionaria.autosNuevos('JJK116'));
// //console.log(concesionaria.autos)




// // Este auto se puede vender
// console.log(concesionaria.venderAuto("APL123"));
// console.log(concesionaria.autos)

const autos = require('./autos');
const kmMax = 100;
const cantCuotas = 12;
const concesionaria = {
    autos: autos,
         buscarAuto: function(patente) {
    for (let i = 0; i < autos.length; i++) {
      if (autos[i].patente === patente) {
        return autos[i]
      }else
      return null;
    }
  },
    buscarPorPatente: function(patente){
        for(i = 0; i < autos.length; i++){
            if(autos[i].patente == patente){
                return autos[i];
            }
        }
    },
    venderAuto: function(patente) {
        const auto = this.buscarPorPatente(patente);
        if(auto){
           auto.vendido = true;
        } else {
           console.log("caigo povr otro lado")
        }
    },
        autosParaLaVenta: function () {
            let auto = autos.filter(function (patente) {
                return patente.vendido === false
            });
            return  auto
        },
    autosNuevos: function(){
        let autosNuevos = [];
    let  misAutosParaVender = this.autosParaLaVenta();
    for(let i = 0; i < misAutosParaVender.length ; i++){
        if (misAutosParaVender[i].km <= kmMax){
           autosNuevos.push(misAutosParaVender[i])
        }
    }
    return autosNuevos;
    },
    listaDeVentas: function(){
        let precioAutosVendidos = [];
        let autosVendidos = autos.filter(function (elemento){
           return elemento.vendido === true;
        }) 
        for (let i = 0; i < autosVendidos.length; i++){
           precioAutosVendidos.push(autosVendidos[i].precio)
        }
        return precioAutosVendidos;
 
     },
      totalDeVentas: function(){
        let precioAutosVendidos = this.listaDeVentas();
        console.log("precioAutosVendidos tiene :" + precioAutosVendidos)
        if( precioAutosVendidos.length == 0 ){
          return 0 
           }
        else {
          let totalVentas = precioAutosVendidos.reduce((a,b) => a + b);
        return totalVentas;     
        } 
     }, 
     puedeComprar: function (auto, persona){
       console.log("a la funcion puede comprar entro el auto : " + JSON.stringify(auto))
      if (auto.precio > persona.capacidadDePagoTotal) {
     return false;
   }
   let precioPorCuota = auto.precio / 12 ;
   if (precioPorCuota > persona.capacidadDePagoEnCuotas) {
     return false;
   }
   return true;
  },
  autosQuePuedeComprar: function (persona){
  let autosQuePuedeComprar = [];
  let autosParaLaVenta = this.autosParaLaVenta();

    for(let i = 0; i < autosParaLaVenta.length  ; i++){
      let autoAevaluar = autosParaLaVenta[i];
      let autos = this.puedeComprar(autoAevaluar, persona)
       autosQuePuedeComprar.push(autos)
    }
    return autosQuePuedeComprar;
  }
 };
 //console.log(concesionaria.venderAuto('JJK116'));
console.log(concesionaria.autosQuePuedeComprar({nombre: "Juan",capacidadDePagoEnCuotas: 20,capacidadDePagoTotal: 160000}));

//Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.

//La función debe de realizar los siguientes pasos:

////1) Obtener los autos para la venta

//2) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.

//3) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2