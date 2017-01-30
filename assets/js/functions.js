// // Arreglo para pialadores
// var arrCab = [];    //  [{name, lastname},{name, lastname}]
// // Arreglo para cabezeros
// var arrPia = [];    //  [{name, lastname},{name, lastname}]
//
// // oden en que se ejecutan los procedimientos
// var arrOrden = [];    //  [[cab,pia],[0,1]]
//
// var arrParejas = [];
// // Parejas:
// //  -Cabezero {name, lastname}
// //  -Pialador {name, lastname}
// //  -Tiempo   [int, int] -> [segundos, milisegundos]
// //  -Fault    int -> segundos
//
// // this should be set by the user
// var tiempoLimite = 14;
//
// var tempoNoProbable = 4;
//
// var noPremios = 5;
//
// // Para que no se repitan las parejas en caso de que sean la misma cantidad de pialadores tanto como de cabezeros
// var wereSameLength = false;
//
//
// // CLASES ------------------------------------------------------------------------------------------------------
//
// // Vaquero{
// //  Id:       int
// //  nombre:     Str
// //  apellido:   Str
// //}
// class Vaquero {
//
//   constructor(nombre, apellido, id) {
//     this.id = id
//     this.nombre = nombre;
//     this.apellido = apellido;
//   }
//
//   getFullName() {
//     this.nombre = $('#strNombre').val().toUpperCase();
//     this.apellido = $('#strApellido').val().toUpperCase();
//     $('#strNombre').val('');
//     $('#strApellido').val('');
//   }
// }
//
// // Pareja{
// //  Cabezero: {name, lastname}
// //  Pialador: {name, lastname}
// //  Tiempo:   [int, int] -> [segundos, milisegundos]
// //  Fault:    int -> segundos
// //}
// class Pareja {
//   constructor(cabezero, pialador, tiempo, fault) {
//     this.cabezero = cabezero;
//     this.pialador = pialador;
//     this.tiempo = tiempo;
//     this.fault = fault;
//   }
// }
//
// // END CLASES --------------------------------------------------------------
//
//
//
// // LLamadas de finciones ---------------------------------------------------
// $('#crearListasBtn').click(crearListas());
// $('#roundOneBtn').click(roundOne());
// $('#resetBtn').click(reset());
//
// // End LLamadas de finciones -----------------------------------------------
//
//
//
// // Botones ------------------------------------------------------------------
// $('#btnPickCab').click(function(){
//   var vaquero = new Vaquero();
//   vaquero.getFullName();
//   vaquero.id = arrCab.length + 1;
//   arrCab.push(vaquero);
//   mostrarLista();
//   crearTablero();
// });
//
// $('#btnPickPia').click(function(){
//   var vaquero = new Vaquero();
//   vaquero.getFullName();
//   vaquero.id = arrPia.length + 1;
//   arrPia.push(vaquero);
//   mostrarLista();
//   crearTablero();
// });
//
// // End botones ----------------------------------------------------------------
//
//
//
// // Funciones ------------------------------------------------------------------
//
// function crarListas(){
//   // construye un informe de datos existentes
//   crearTablero();
//
//   if(arrCab.length == arrPia.length){
//     arrCab.push({nombre: 'Bonus',apellido: 'Extra 99',id: 1212});
//     wereSameLength = true;
//     //alert("true: " + arrPia.length );
//   } else {
//     wereSameLength = false;
//   }
//
//   var cuentaPia = 0; // Contador para el arreglo de pialadores
//   var maxPia = arrPia.length - 1;
//   var cuentaCab = 0;
//   var maxCab = arrCab.length -1;
//   var cab = 10; var pia = 10;
//   var contadorCuentasIguales = 0;
//   var maxCuentasIguales = arrCab.length -1;
//   arrOrden = [];
//
//   for(i = 1; i <=  (arrCab.length * arrPia.length); i++){
//
//     if(cuentaPia <= maxPia){
//       pia = cuentaPia;
//       cuentaPia ++;
//     }else { pia = 0; cuentaPia = 1;}
//
//     if(cuentaCab <= maxCab){
//       cab = cuentaCab;
//       cuentaCab++;
//     } else { cuentaCab = 1;  cab = 0;}
//
//     // if they are the same and it is the last player, don`t write it
//     if(!(wereSameLength && cab == maxCab)){
//       // te da el indice en el arreglo
//       $('.combinacionesParejas').append("Pareja: " + cab + " " + pia + "<br>"); }
//
//       arrOrden.push([cab,pia]);
//   }
//
// }
//
// function crearPareja(){
//
// }
//
//
// function crearTablero(){
//   $('.combinacionesParejas').text('');
//   $('.combinacionesParejas').append("Cabezeros: " + arrCab.length + " " + "Pialadores: " + arrPia.length +"<br>");
//   $('.combinacionesParejas').append("Convinaciones totales: " + arrCab.length * arrPia.length +"<br>");
//   $('.combinacionesParejas').append("<br><br>Pureba:<br>");
// }
//
// function reset(){
//   arrCab = [];
//   arrPia = [];
//   pareja = [];
//   arrOrden = [];
//   $('.combinacionesParejas').text('');
//   mostrarLista();
//   crearTablero();
// }
//
// function mostrarLista(){
//   $(".PlayersColWrapCab").text('');
//   $(".PlayersColWrapCab").append("<div class=\"PlayersTitle\">Cabezeros</div><div class=\"row\"><div class=\"id\">ID</div><div class=\"player\">Vaquero</div></div>");
//   for(i=0;i<arrCab.length;i++){
//     $('.PlayersColWrapCab').append("<div class=\"row\"><div class=\"id\">" + arrCab[i].id + "</div><div class=\"player\">" + arrCab[i].nombre + " " + arrCab[i].apellido + "</div></div>");
//   }
//
//   $(".PlayersColWrapPia").text('');
//   $(".PlayersColWrapPia").append("<div class=\"PlayersTitle\">Pialadores</div><div class=\"row\"><div class=\"id\">ID</div><div class=\"player\">Vaquero</div></div>");
//   for(i=0;i<arrPia.length;i++){
//     $('.PlayersColWrapPia').append("<div class=\"row\"><div class=\"id\">" + arrPia[i].id + "</div><div class=\"player\">" + arrPia[i].nombre + " " + arrPia[i].apellido + "</div></div>" );
//   }
// }
//
// // End Funciones -------------------------------------------------------------------
