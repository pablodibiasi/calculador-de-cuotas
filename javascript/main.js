// //ingresar productos en venta.(aca ingresa el adm. los productos para a vender, base de datos seria..).

const ProdEnVenta = []
let cant = parseInt(prompt('cuantos productos desea ingresar'))
for (i = 0; i < cant; i++) {
  class producto {
    constructor(id, nombre, precio) {
      this.id = id
      this.nombre = nombre
      this.precio = precio
    }
  }
  let ingresarId = parseInt(prompt('ingrese nuevo num de id de producto'))
  let ingresarNombreProducto = prompt('ingrese producto')
  let ingresarValorProducto = parseFloat(
    prompt('ingrese precio de lista del producto'),
  )

  const producto1 = new producto(
    ingresarId,
    ingresarNombreProducto,
    ingresarValorProducto,
  )

  ProdEnVenta.push(producto1)
}
console.log(ProdEnVenta)

//aca abajo creo el array carrito...

let idProdCompra = parseInt(prompt('id del producto a comprar?'))

let carritoPrueba = ProdEnVenta.filter((el) => el.id === idProdCompra)

let otroObjeto = []

let seguirComprando = 'y'
while (seguirComprando == 'y') {
  seguirComprando = prompt('desea agregar algun prod al carrito (y/n)')

  if (seguirComprando == 'y') {
    idProdCompra = parseInt(prompt('id del producto ?'))
    otroObjeto = ProdEnVenta.filter((el) => el.id === idProdCompra)

    carritoPrueba.push(otroObjeto)
  } else {
    alert('ir al carrito para finalizar compra')
    seguirComprando = 'f'
  }
}
//esto me crea un array con un objeto y array x cada objeto q sumo....

let carrito = carritoPrueba.flat() //con esto lo transformo en array de objetos...

console.log(carrito)

//func.cuotas-----

let precios = []
for (i in carrito) precios.push(carrito[i].precio)

console.log(precios)
const init = 0
const sum = precios.reduce((anterior, actual) => anterior + actual, init)
console.log(sum)
function calculoCuota(valorProducto, cantidadCuotas) {
  if (isNaN(valorProducto) || isNaN(cantidadCuotas)) {
    alert('solo se aceptan numeros.')
  } else if (cantidadCuotas == 1) {
    valorCuota = (valorProducto * -0.1 + valorProducto) / cantidadCuotas
    alert(
      'El total es de : $ ' +
        valorProducto +
        ' ,con 10 % de descuento en 1 pago es =  $' +
        valorCuota.toFixed(2) +
        '.',
    )
  } else if (cantidadCuotas > 1 && cantidadCuotas <= 6) {
    valorCuota = (valorProducto * 0.25 + valorProducto) / cantidadCuotas
    alert(
      'su total es : $ ' +
        valorProducto +
        ' , Su cuota con intereses del 25 % es de $ ' +
        valorCuota.toFixed(2) +
        '  en ' +
        cantidadCuotas +
        ' pagos.',
    )
  } else if (cantidadCuotas >= 7 && cantidadCuotas <= 12) {
    valorCuota = (valorProducto * 0.5 + valorProducto) / cantidadCuotas
    alert(
      'su total es : ' +
        valorProducto +
        ' pesos, Su cuota con intereses del 50 % es de ' +
        valorCuota.toFixed(2) +
        ' pesos en ' +
        cantidadCuotas +
        ' pagos.',
    )
  } else {
    alert('Solo se permiten hasta 12 cuotas.')
  }
}
let v1 = sum
let v2 = parseInt(prompt('Ingrese la cantidad de cuotas a pagar.'))
let calculo = 'y'

calculoCuota(v1, v2)

while (calculo == 'y') {
  calculo = prompt('desea saber el valor con otra cantidad de cuotas? (y/n)')
  if (calculo == 'y') {
    v1 = sum
    v2 = parseInt(prompt('ingrese cantidad de cuotas'))
    calculoCuota(v1, v2)
  } else {
    alert('gracias por usar nuestro calculador de cuotas.')
    calculo = 'f'
  }
}
