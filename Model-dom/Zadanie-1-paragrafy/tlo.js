'use strict';

var parjeden=document.getElementsByTagName('p')[0];
console.log(parjeden);

var pardwa=document.getElementsByTagName('p')[1];
console.log(pardwa);

function ustawTlo(e){
	console.log('michał');
	parjeden.style.background='red';
	pardwa.style.background='yellowSS'
	
}

document.getElementById('przycisk').onclick=ustawTlo;

