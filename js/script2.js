function hamburguesa(){
	var menu = document.getElementById('botones_principales')

	if(menu.style.display == 'block'){
		menu.style.display = 'none'
	} else {
		menu.style.display = 'block'
	}
}


function serviciosOver(cajaTxt){
	var cajaOver = document.getElementById(cajaTxt)

	cajaOver.style.backgroundColor = '#cc0066'

}

function serviciosOut(cajaTxt){
	var cajaOut =  document.getElementById(cajaTxt)
	cajaOut.style.backgroundColor = '#d9b3ff'
}
