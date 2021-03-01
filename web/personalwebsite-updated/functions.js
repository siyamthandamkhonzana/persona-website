* var paragraph = document.getElementsByTagName('p')[0];

function textEffect(animationName) {
  var text = paragraph.innerHTML,
		chars = text.length,
		newText = '',
		animation = animationName,
		char,
		i;

	for (i = 0; i < chars; i += 1) {
		newText += '<i>' + text.charAt(i) + '</i>';
	}

	paragraph.innerHTML = newText;

	var wrappedChars = document.getElementsByTagName('i'),
		wrappedCharsLen = wrappedChars.length,
		j = 0;

	function addEffect () {
		setTimeout(function () {
			wrappedChars[j].className = animation;
			j += 1;
			if (j < wrappedCharsLen) {
				addEffect();
			}
		}, 100)
	}

	addEffect();
};

textEffect('welcome-to-my-page');
/*
var menue = document.querySelector(".icon")

function navBar() {
	var x = document.getElementById("#myNavBar");
	if (x.className === "nav") {
	  x.className += "responsive";
	} else {
	  x.className = "nav";
	}
  }

  menue.onclick = navBar;*/


/*var slideIndex= 0;

function aboutImgSlide() {
	var i;
	var slides = document.getElementsByClassName("about-img");

	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	slides[slideIndex-1].style.display = "circle";  
	setTimeout(showSlides, 2030);
  }

  aboutImgSlide();*/