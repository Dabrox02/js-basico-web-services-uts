// Jaider Steeven Mendoza Cardona
// Marlon Alberto Sosa Garcia

const nameProduct = 'Mouse'
const priceProduct = 100000 // valor producto
const quantity = 5 // cantidad 
const iva = 10 // iva en porcentaje 
const minProductPromotion = 19 // cantidad
const promotionDiscount = 10 // descuento porcentaje
let total = 0

/* Aca aplicamos comparaciones */
const returnMessage = (nameProduct, priceProduct, quantity, iva) => {
    let mensaje = ''
    if (quantity > 1) {
        mensaje = `Se compraron ${quantity} productos: (${nameProduct}) con valor de ${priceProduct} e IVA del ${iva}%`
    }
    if (quantity <= 1 && quantity > 0) {
        mensaje = `Se compro 1 producto: (${nameProduct}) (${nameProduct}) con valor de ${priceProduct} e IVA del ${iva}%`
    }
    return mensaje
}


/* Aca mostramos tipos */
console.log(returnMessage(nameProduct, priceProduct, quantity, iva));

const printType = (value) => {
    console.log(`El valor ${value} es de tipo ${typeof value}`);
}


/* Aca realizamos operaciones */
// Calcular el valor del producto sin IVA
const baseProduct = priceProduct / (1 + (iva / 100))  // Producto sin IVA
console.log(`Producto sin IVA: ${baseProduct.toFixed(2)}`);

// Calcular el valor IVA del producto
const ivaValue = baseProduct * 10 / 100
console.log(`Valor iva: ${ivaValue}`);

console.log('=====================================');
printType(nameProduct)
printType(priceProduct)
printType(quantity)
printType(iva)
console.log('=====================================');



/* Aca aplicamos operaciones, comparaciones */

// Aplicar promocion 
const promotionApplied = (priceProduct, baseProduct, quantity, minProductPromotion, promotionDiscount) => {
    if (quantity >= minProductPromotion) {
        console.log(`El producto recibe promocion`);
        const priceDiscount = baseProduct / (1 + (promotionDiscount / 100))
        total = priceDiscount * quantity
    }

    if (quantity < minProductPromotion) {
        console.log(`El producto no recibe promocion`);
        total = priceProduct * quantity
    }
}

promotionApplied(priceProduct, baseProduct, quantity, minProductPromotion, promotionDiscount);
console.log(`Total a pagar es: ${total}`);
console.log('=====================================');



