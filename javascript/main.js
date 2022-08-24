function calculoCuota(valorProducto, cantidadCuotas) {
  if (isNaN(valorProducto) || isNaN(cantidadCuotas)) {
    alert('solo se aceptan numeros.')
  } else if (cantidadCuotas == 1) {
    valorCuota = (valorProducto * -0.1 + valorProducto) / cantidadCuotas
    alert(
      'El valor con 10 % de descuento en 1 pago es ' + valorCuota + ' pesos.',
    )
  } else if (cantidadCuotas > 1 && cantidadCuotas <= 6) {
    valorCuota = (valorProducto * 0.25 + valorProducto) / cantidadCuotas
    alert(
      'Su cuota con intereses del 25 % es de ' +
        valorCuota +
        ' pesos en ' +
        cantidadCuotas +
        ' pagos.',
    )
  } else if (cantidadCuotas >= 7 && cantidadCuotas <= 12) {
    valorCuota = (valorProducto * 0.5 + valorProducto) / cantidadCuotas
    alert(
      'Su cuota con intereses del 50 % es de ' +
        valorCuota +
        ' pesos en' +
        cantidadCuotas +
        ' pagos.',
    )
  } else {
    alert('Solo se permiten hasta 12 cuotas.')
  }
}

let v1 = parseFloat(prompt('Ingrese el valor del producto.'))
let v2 = parseInt(prompt('Ingrese la cantidad de cuotas a pagar.'))
let calculo = 'y'

calculoCuota(v1, v2)

while (calculo == 'y') {
  calculo = prompt('desa realizar otro calculo? (y/n)')
  if (calculo == 'y') {
    v1 = parseFloat(prompt('ingrese el valor del producto'))
    v2 = parseInt(prompt('ingrese cantidad de cuotas'))
    calculoCuota(v1, v2)
  } else {
    alert('gracias por usar nuestro calculador de cuotas.')
    calculo = 'f'
  }
}
