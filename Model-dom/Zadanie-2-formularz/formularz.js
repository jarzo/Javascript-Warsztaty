'use strict';



function pobierzImie(event) {
	event.preventDefault();
	var fname = document.getElementsByName('fname')[0].value;
	var lname = document.getElementsByName('lname')[0].value;
	console.log('BLOCK');
	console.log(fname);
	console.log(lname);

}


//function wyswietlWK() {
//	console.log(fname);
//	console.log(lname);
//}
//var form = document.getElementById('przycisk');