var plaatje = document.getElementById("imageholder");
var num = 1;
console.log(num);
imageholder.style.backgroundImage = "url('images/olifant1.jpg')";

imageholder.addEventListener("click", function() {
	num++;
	console.log(num);
	imageholder.style.backgroundImage = "url('images/olifant" + num + ".jpg')";
	if(num == 10){
		num = 1;
		console.log(num);
		imageholder.style.backgroundImage = "url('images/olifant" + num + ".jpg')";
	}
});