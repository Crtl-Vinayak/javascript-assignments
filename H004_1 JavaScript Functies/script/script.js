/*
document.getElementById("olifant1").src = "images/olifant1.jpg";
document.getElementById("olifant2").src = "images/olifant2.jpg";
document.getElementById("olifant3").src = "images/olifant3.jpg";
document.getElementById("olifant4").src = "images/olifant4.jpg";
document.getElementById("olifant5").src = "images/olifant5.jpg";
document.getElementById("olifant6").src = "images/olifant6.jpg";
document.getElementById("olifant7").src = "images/olifant7.jpg";
document.getElementById("olifant8").src = "images/olifant8.jpg";
document.getElementById("olifant9").src = "images/olifant9.jpg";
*/

/*
var random = 0;
var randomNumbers = [];

while(randomNumbers.length < 9){
	random = Math.floor(Math.random() * 9) + 1;
	if(randomNumbers.lastIndexOf(random) == -1) {
		randomNumbers.push(random);
		console.log(randomNumbers);
		document.getElementById("olifant" + randomNumbers.length).src = "images/olifant" + random + ".jpg";
	} 
}
*/

var mijnauto = {
	merk: "Ford",
	type: "Mondeo",
	aantalWielen: 4,
	kleur: "blauw",
	snelheid: 0,
	
	toeteren: function() {
		console.log("toet!");
	},
	
	gasgas: function() {
		//in plaats van "mijnauto.snelheid", kan je ook "this.snelheid" gebruiken.
		if(this.snelheid < 13){
			console.log("snelheid is nu " + (mijnauto.snelheid += 10));
		} else if (this.snelheid < 26) {
			console.log("snelheid is nu " + (mijnauto.snelheid += 20));
		} else {
			console.log("snelheid is nu " + (mijnauto.snelheid += 30));
		}
	}
}

console.log("Kleur van auto is " + mijnauto.kleur);

mijnauto.toeteren();

mijnauto.gasgas();
mijnauto.gasgas();
mijnauto.gasgas();
mijnauto.gasgas();
mijnauto.gasgas();
mijnauto.gasgas();
mijnauto.gasgas();
mijnauto.gasgas();
mijnauto.gasgas();
mijnauto.gasgas();

mijnauto.toeteren();
mijnauto.toeteren();
mijnauto.toeteren();
