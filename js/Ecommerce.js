/* Precios */

const PRECIO_UNITARIO_CAMISA = 25
const PRECIO_UNITARIO_PANTALON = 50
const PRECIO_UNITARIO_CAFARENA = 40
const PRECIO_UNITARIO_SHORT = 30
const PRECIO_UNITARIO_JEANS = 60

nombrePrenda = ""

/* Función que genera número aleatorio para la boleta de compra */

const generarNumeroCompra = () => {
    return Math.floor(Math.random() * 100000)
}

/* Función para elegir una opción */

const opcionCompra = () => {

    let opcion = parseFloat(prompt('.:MENÚ:.\n1. CAMISAS\n2. PANTALONES\n3. CAFARENAS\n4. SHORT\n5. JEANS\nIngrese una opción (número) del menú:'))

    if (opcion === 1) {
        nombrePrenda = "CAMISAS"
        return PRECIO_UNITARIO_CAMISA
    }
    else if (opcion === 2) {
        nombrePrenda = "PANTALONES"
        return PRECIO_UNITARIO_PANTALON
    }
    else if (opcion === 3) {
        nombrePrenda = "CAFARENAS"
        return PRECIO_UNITARIO_CAFARENA
    }
    else if (opcion === 4) {
        nombrePrenda = "SHORTS"
        return PRECIO_UNITARIO_SHORT
    }
    else if (opcion === 5) {
        nombrePrenda = "JEANS"
        return PRECIO_UNITARIO_JEANS
    }
    else {
        alert('Opción inválida! Intentelo de nuevo.')
        return opcionCompra()
    }
}

/* Función para pedir la cantidad de prendas */

const compra = (precio) => {
    let compra = parseFloat(prompt('.:COMPRA:.\nIngrese la cantidad de '+ nombrePrenda +' que desea comprar:'))

    while (isNaN(compra) || compra <= 0 || !Number.isInteger(compra)) {

        alert('No se pueden ingresar números negativos, decimales, letras o simbolos!')
        compra = parseFloat(prompt('.:COMPRA:.\nIngrese la cantidad de '+ nombrePrenda +' que desea comprar:'))

    }

    /* Calculo del pago */

    let subTotal = compra * precio
    let igv = subTotal * 0.18
    let totalCompra = subTotal + igv
    let numeroCompra = generarNumeroCompra()

    /* Mensaje de toda la compra */

    alert('.:COMPRA REALIZADA:.'+
    '\n N° COMPRA: ' + numeroCompra +
    '\n CANTIDAD: ' + compra + 
    '\n PRENDA: ' + nombrePrenda +
    '\n PRECIO UNIDAD: S/. ' + precio +
    '\n SUBTOTAL: S/. ' + subTotal +
    '\n IGV: S/. ' + igv +
    '\n '+ 'TOTAL COMPRA INCLUIDO (IGV): S/. ' + totalCompra)

    alert('Gracias por su compra.')
    
}

let precioUnitario = opcionCompra()
compra(precioUnitario)

