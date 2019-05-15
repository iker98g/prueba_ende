$( document ).ready(function() {
    var enlace="http://10.22.72.80:8080/Proyecto_v2/cProductos";
    	
    $.getJSON(enlace, function(response){
    	//CARGA PRODUCTOS
        var datos=response;
        
//        console.log("NOMBRE 0 : "+ datos[0].nombre);
//        console.log("NOMBRE  1 : "+datos[1].nombre);
        var htmlCode="";
        for (let i = 0; i < datos.length; i++) {

        	htmlCode += '<div class=" col-md-2 card-producto" data-idcategoria="'+datos[i].idCategoria+'">';
        	

        	htmlCode +=	'<div class="casillas card mb-1 shadow-sm mt-3">';
        	htmlCode += 	'<img class="card-img-top" src="'+ datos[i].imagen +'" width="100%" style="height: 225px; width: 100%; display: block;"/>';
        	htmlCode += 	'<div class="card-body " >';
            htmlCode += 		'<p class="card-text">Nombre del producto: '+ datos[i].nombre +'</p>';
            htmlCode += 		'<p class="card-text">Precio: '+ datos[i].precio +'€'+'</p>';
            htmlCode += 		'<div class="d-flex justify-content-between-end ">';
	        htmlCode += 		'<div class=" btn-group ">';
	        htmlCode += 		'<button type="button" data-imagen="'+datos[i].imagen+'"data-idproducto="'+datos[i].idProducto+'" data-nombre="'+datos[i].nombre+'" '+' data-precio="'+datos[i].precio+'" class="boton-carrito btn btn-sm btn-outline-secondary"> <i class="fas fa-cart-plus aniadirCarrito"></i></button>'; 
	        htmlCode += 		'</div>';
            htmlCode += 		'</div>';
            htmlCode += 		'</div>';
            htmlCode += 	'</div>';
            htmlCode += '</div>'; 

        }
      //  console.log("HTML : "+htmlCode);
        $('#producto').html(htmlCode);
        
        
        $('.boton-carrito').click(function(){
        	//añadir la compra al carrito
        	var compra = {
        			//idCategoria:$(this).data('idcategoria'),
        			idProducto:$(this).data('idproducto'),
        			imagen:$(this).data('imagen'),
        			nombre:$(this).data('nombre'),
        			precio:$(this).data('precio')
        			};
    
        	//sacamos lo que hay en el carrito y le añadimos la compra
        	//**Esto es para reconvertir el String que genera el localStorage en un array**
        	var vCarrito=JSON.parse(localStorage.getItem("carrito")); //de string a array JSON
        	
        	if ( vCarrito==null){
        		vCarrito=[];
        	}
        	vCarrito.push(compra);
        	//vCarrito[compra.idProducto] = compra;
        	//vCarrito[compra.idProducto].cantidad +=1;
        	
        	//añadir el carrito al localstorage pasandolo a string
        	//**Esto es para reconvertir el String que genera el localStorage en un array**
        	localStorage.setItem("carrito",JSON.stringify(vCarrito));
        	
        });
    });
    
    
    var cat="http://10.22.72.80:8080/Proyecto_v2/cCategorias"
    
    $.getJSON(cat, function(response){
    	//CARGA PRODUCTOS
        var categorias=response;
        
//        console.log("NOMBRE 0 : "+ categorias[0].nombre);
        var htmlCode="";
        for (let i = 0; i < categorias.length; i++) {


//        	htmlCode += '<a class="list-group-item list-group-item-action btn-cat">'+categorias[i].nombre +'</a>';
        	htmlCode += '<button type="button" class="btn btn-outline-primary btn-cat mt-2 w-75 ml-5 rounded-pill categoria" data-idcategoria="'+categorias[i].idCategoria+'">'+categorias[i].nombre +'</button>';
        }
//        console.log("HTML : "+htmlCode);
        
        $('#categorias').append(htmlCode);
        
        $('.categoria').click(function(event){
        	var cId = $(this).data('idcategoria');
        	$('.card-producto[data-idCategoria="'+cId+'"]').show();
        	$('.card-producto[data-idCategoria!="'+cId+'"]').hide();
        	
		});
		$('#categoria-todo').click(function(){
			$('.card-producto[data-idCategoria]').show();
		});
    });
//    console.log(categorias.nombre);

//    $('.btn-cat').on(click,function(){
//    	$('.btn-cat').addClass('active');
//    	
//    });

});