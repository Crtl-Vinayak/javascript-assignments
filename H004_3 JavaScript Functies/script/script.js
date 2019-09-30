var plaatje1 = document.getElementById("imageholder1");
var plaatje2 = document.getElementById("imageholder2");
var plaatje3 = document.getElementById("imageholder3");

var num = 1;
console.log(num);
imageholder1.style.backgroundImage = "url('images/face1.png')";
imageholder2.style.backgroundImage = "url('images/torso1.png')";
imageholder3.style.backgroundImage = "url('images/benen1.png')";

imageholder1.addEventListener("click", function() {
	num++;
	console.log(num);
	imageholder1.style.backgroundImage = "url('images/face" + num + ".png')";
	if(num == 9){
		num = 1;
		console.log(num);
		imageholder1.style.backgroundImage = "url('images/face" + num + ".png')";
	}
});

imageholder2.addEventListener("click", function() {
	num++;
	console.log(num);
	imageholder2.style.backgroundImage = "url('images/torso" + num + ".png')";
	if(num == 9){
		num = 1;
		console.log(num);
		imageholder2.style.backgroundImage = "url('images/torso" + num + ".png')";
	}
});

imageholder3.addEventListener("click", function() {
	num++;
	console.log(num);
	imageholder3.style.backgroundImage = "url('images/benen" + num + ".png')";
	if(num == 9){
		num = 1;
		console.log(num);
		imageholder3.style.backgroundImage = "url('images/benen" + num + ".png')";
	}
});

//gezicht met nek
//armen en torso
//benen en voeten
