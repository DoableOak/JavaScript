function validarn(e){
	var teclado = (document.all)?e.keyCode:e.which;
	if(teclado == 8)return true;
	var patron = /[0-9\d.]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec);
}
function interes(){
	var valor = document.Formulario.cantidad.value;
	
	var cantidad = parseInt(valor);
	var interes= 0.02*cantidad;
	var total = cantidad+interes;


	document.Formulario.interesi.value = "$"+ interes;
	document.Formulario.sueldo.value = "$" +total;
}

//Segundo ejericicio 
function comision(){
	var sue = document.Formulario2.sueldob.value;
	var sueld = parseInt(sue);
	var comi1 = document.Formulario2.ven1.value;
	var ven1  = parseInt(comi1);
	var comi2 = document.Formulario2.ven2.value;
	var ven2  = parseInt(comi2);
	var comi3 = document.Formulario2.ven3.value;
	var ven3  = parseInt(comi3);
	var comi4 = document.Formulario2.ven4.value;
	var ven4 = parseInt(comi4);
	var comi5 = document.Formulario2.ven5.value;
	var ven5 = parseInt(comi5);

	var comision1 = 0.1* ven1;
	var comision2 = 0.1*ven2;
	var comision3 = 0.1*ven3;
	var commision4 = 0.1*ven4;
	var comision5 = 0.1*ven5;

	var sumacomi = comision5+comision4+comision3+comision2+comision1
	var sueldotota = sumacomi + sueld;

	document.Formulario2.comiss.value = "$" + sumacomi;
	document.Formulario2.sueldoto.value = "$"+ sueldotota;
}

//Tecer Ejercicio
function venta(){
	var precio = document.Formulario3.compra.value;
	var compra = parseInt(precio);

	var desuento = 0.07 * compra;
	var totalcompra = compra-desuento;

	document.Formulario3.precompra.value = "$"+totalcompra;
}

//Cuarto Ejercicio
function calif(){
	var par1 = document.Formulario4.parcial1.value;
	var par2 = document.Formulario4.parcial2.value;
	var par3 = document.Formulario4.parcial3.value;
	var exa = document.Formulario4.examen.value;
	var tfinal = document.Formulario4.trabajo_final.value;

	//valores

	var parci1 = parseInt(par1);
	var parci2 = parseInt(par2);
	var parci3 = parseInt(par3);
	var exam = parseInt(exa);
	var traba_fina = parseInt(tfinal);

	var parciales = (55*(parci1 + parci2 + parci3))/30

	var cal_exa = (30*exam)/10;
	
	var trabajo = (15* traba_fina)/10;
	

	var total_calif = (parciales+cal_exa +trabajo)/10
	
	document.Formulario4.promedio.value = total_calif;
}

//Quinto Ejercicio
function porcentaje(){
	var hom = document.Formulario5.hombres.value;
	var muj = document.Formulario5.mujeres.value;

	var chom = parseInt(hom);
	var cmuj = parseInt(muj);
	var totalalu = chom + cmuj;
	
	var porhom = ((chom)*100)/totalalu;
	
	var pormuj = ((cmuj)*100)/totalalu;

	document.Formulario5.hompor.value = porhom + "%"
	document.Formulario5.mujpor.value = pormuj + "%"
}