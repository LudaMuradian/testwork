
	let tileArr = document.getElementById('tileId');
	let div = tileId.getElementsByTagName('div')
	let itemClose = tileArr.querySelector(".fild-item2");
	let button = document.querySelector(".more");
	let elements = document.querySelectorAll('.fild-item2');
	


	button.onclick = function(){
	let computedStyle = getComputedStyle(itemClose);
    if (computedStyle.display ==="none"){
		for (let elem of elements) {
			elem.style.display = "block"; 
			button.textContent = "Back";
		} 
	} else {
			for (let elem of elements) {
			elem.style.display = "none";
			button.textContent = "More";			
		} 
		};
	}
	
	



	function myFunction() {
		var x = document.getElementById("myTopnav");
		if (x.className === "top-menu") {
			x.className += " responsive";
		} else {
			x.className = "top-menu";
		}
}
