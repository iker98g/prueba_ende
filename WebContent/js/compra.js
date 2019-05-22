$(document).ready(function () {

	var vCarrito = JSON.parse(localStorage.getItem('carrito'));
	var htmlCode = "";
	// var vCarritoFinal=JSON.parse(localStorage.getItem('carrito-final'));
	// var vCarritoFinal=[];
	for (let i = 0; i < vCarrito.length; i++) {
	
	htmlCode += '<tr>';
		htmlCode += 	'<td><img class="card-img-top" src="'+ vCarrito[i].imagen +'" width="100%" style="height: 150px; width: auto; display: block;"/></td>';
		htmlCode += 	'<td>'+ vCarrito[i].nombre +'</td>';
		htmlCode += 	'<td>'+ vCarrito[i].precio +'€</td>';
		htmlCode += 	'<td>'+ vCarrito[i].cantidad+'</td>';
		
		vCarrito[i].total=vCarrito[i].precio * vCarrito[i].cantidad;
		
		htmlCode += 	'<td>'+ vCarrito[i].total+'€</td>';
		htmlCode += 	'<td><i class="far fa-trash-alt eliminar"></i></td>';
    htmlCode += '</tr>';
   
	

	$('#compra > tbody').html(htmlCode);
	localStorage.setItem("carrito", JSON.stringify(vCarrito));
	// localStorage.setItem("carrito-final", JSON.stringify(vCarritoFinal));
//		for (var i = 0; i < vCarrito.length; i++) {	
	}
		
	
//		subtotal = precio*cantidad;
//		inputtext.value=subtotal;
	var htmlTotal="";
	var subTotal = 0;
	for (let i = 0; i < vCarrito.length; i++) {
		subTotal = subTotal+vCarrito[i].total;
		
	}
	//console.log(subtotal);
	htmlTotal += 	'<div>'+subTotal+'€</div>';
	$('#precio-total').html('TOTAL: '+htmlTotal);
	localStorage.setItem("subTotal", JSON.stringify(subTotal));
	




});

// function calcularTotal () {
//     // Limpiamos precio anterior
//     var total = 0;
//     // Recorremos el array del carrito
//     for (let item of vCarrito) {
//         // De cada elemento obtenemos su precio
//         let miItem = baseDeDatos.filter(function(itemBaseDatos) {
//             return itemBaseDatos['id'] == item;
//         });
//         total = total + miItem[0]['precio'];
//     }
//     // Renderizamos el precio en el HTML
//     $total.textContent = total.toFixed(2);
// }