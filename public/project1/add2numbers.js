function kalkulator() {
let angka = document.querySelectorAll('input');
let i1= angka[0].value ; //angka pertama
let i2= angka[1].value ; //angka kedua
let i3= parseInt(i1) + parseInt(i2)

if(!isNaN(i3)){
	angka[2].value = i3;
}
}
/*let tombol = document.querySelector('button');
tombol.addEventListener('click', kalkulator);*/