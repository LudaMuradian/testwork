		
	let wrap = document.querySelector(".wrap");
	let wrapper = document.querySelector(".wrapper"); 
	let wrapCircle = document.querySelector(".wrap-circle"); 
	let wrapText = document.querySelector(".wrap-text"); 
	let x;
	let y;		
	wrap.onmousemove = function (event){
		x = event.x-650;
		y = event.y-400;
		console.log (x,y);
		wrapCircle.style.left = '40px';
		wrapper.style.transform = 'rotate('+57.2958*arccot(x, y)+'deg)';		
		wrapText.style.transform = 'translateX(25px)';	

		function arccot(x, y) {
			if (x > 0 && y >0 )	return Math.PI/2 - Math.atan(x/y);
			if (x < 0 && y >0 )	return Math.PI/2 - Math.atan(x/y);
			if (x < 0 && y <0 ) return Math.PI + Math.atan(x/y);
			if (x > 0 && y <0 )	return 3 * Math.PI/2 + Math.abs(Math.atan(x/y));
		}
	if (window.innerWidth < 1240) {
		x = event.x-300;
		y = event.y-600;
		wrapText.style.transform = 'none';
		wrapper.style.transform = 'rotate("none")';
		wrapCircle.style.left = '0';
	}		
	}
	
		// Blue ball
	wrapper.onmouseover = function () {
	wrapper.classList.remove('animation-circ-small');
	}
	wrapper.onmouseleave = function () {
	wrapper.classList.add('animation-circ-small');
	}
	wrap.onmouseleave = function () {				
		wrapCircle.style.left = '0px';			
	};	
	
	let elem = document.querySelector('.itm');
	let text = document.querySelector('.text');
		  
			elem.onmouseover = function () { 			
				text.style.display = 'block'; 
				text.style.color = 'white';
				text.style.position = 'absolute';
				text.style.padding = '40px 10px';
				text.style.width = '220px';			
			};	
			elem.onmouseleave = function () {				
				text.style.display = 'none';			
			};
			
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		let itm2 = entry.target.querySelector('.itm2');
		let itm3 = entry.target.querySelector('.itm3');
		let itm4 = entry.target.querySelector('.itm4');
		let featuresWrap = entry.target.querySelector('.features-wrap');

		if (entry.isIntersecting) {
		  itm2.classList.add('animation');
		  itm3.classList.add('animation');
		  itm4.classList.add('animation');
		  return; 
		}else{		
		itm2.classList.remove('animation');
		itm3.classList.remove('animation');
		itm4.classList.remove('animation');
		}

	  });
	});
	observer.observe(document.querySelector('.features-wrap'));	
	

	let howclean = document.querySelector( '.howclean' );
	let headers = document.querySelector( '.headers' );
	let arrow =	document.getElementsByClassName('arrow');
	let slide = document.getElementsByClassName( 'slide' );
	let slidePlaceholder = document.getElementsByClassName( 'slide-placeholder');
	let tooltip = document.getElementsByClassName ('tooltip');	

	window.onscroll = function() {
	let scrollTop =  document.body.scrollTop;
	console.log (scrollTop);
		if (scrollTop > 20 && window.innerWidth > 1240) {
			wrapper.classList.add('animation-circ-small');
			}else{
			wrapper.classList.remove('animation-circ-small');
		};
	
	if (scrollTop > 1200) {
	
		for (i = 0; i < slidePlaceholder.length; i++){
			slidePlaceholder[i].classList.add('placeholder-animation');
		};
			howclean.classList.add('howclean-animation');
			headers.classList.add('leftmenu-animation');		
		} else {
			howclean.classList.remove('howclean-animation');
			headers.classList.remove('leftmenu-animation');
		for (i = 0; i < slidePlaceholder.length; i++){
			slidePlaceholder[i].classList.remove('placeholder-animation');
		};
	};
	}
	if (window.innerWidth < 600){
	window.onscroll = function() {
		let scrollTop =  document.body.scrollTop;
	console.log (scrollTop);
			if (scrollTop > 2150 ) {
		for (i = 0; i < slidePlaceholder.length; i++){
			slidePlaceholder[i].classList.add('placeholder-animation');
		};
			howclean.classList.add('howclean-animation');		
			headers.classList.add('leftmenu-animation');		
		} else {
		for (i = 0; i < slidePlaceholder.length; i++){
			slidePlaceholder[i].classList.remove('placeholder-animation');		
			};
			howclean.classList.remove('howclean-animation');		
			headers.classList.remove('leftmenu-animation');	
		};
	
		} 
	};


// Slider
	let slideIndex = 1;
	showSlides (slideIndex);
	
	function currentSlide(n) { 
    showSlides(slideIndex = n);
	}
	
	function showSlides(n) {
	let i;
	let tooltip = document.getElementsByClassName ('tooltip');
	
	for (i = 0; i < arrow.length; i++) {
		arrow[i].style.display = "none";	
		}
	for (let i = 0; i < tooltip.length; i++) {
		tooltip[i].classList.add('tooltype-animation');
	}
	function show(){
		for (let i = 0; i < slide.length; i++) {
			slide[i].style.display = "none";
			setTimeout(() => slide[i].style.display = "inline-block", 0);	
		}	
	}		
	show(showSlides);
	function showArrow() {	
		arrow[slideIndex - 1].style.display = "inline-block";
	}
	setTimeout(showArrow, 3000);
	};
	
	function myFunction() {
		let x = document.querySelector( '.main-menu' );
		if (x.className === "main-menu") {
			x.className += " responsive";
		} else {
			x.className = "main-menu";
		}
}