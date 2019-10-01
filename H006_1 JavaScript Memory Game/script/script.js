/*
How did I shuffle the numbers in the array?
I used the code from:
https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?page=1&tab=votes#tab-top
*/

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
arr = shuffle(arr);
console.log(arr);

let image1 = arr[0];
let image2 = arr[1];
let image3 = arr[2];
let image4 = arr[3];
let image5 = arr[4];
let image6 = arr[5];
let image7 = arr[6];
let image8 = arr[7];
let image9 = arr[8];
let image10 = arr[9];
let image11 = arr[10];
let image12 = arr[11];
let image13 = arr[12];
let image14 = arr[13];
let image15 = arr[14];
let image16 = arr[15];
let image17 = arr[16];
let image18 = arr[17];

let beurt = 1;
let temp1 = 0;
let temp2 = 0;
let player1points = 0;
let player2points = 0;
let checkclick = 1;
let imgNum = -1;
let tempImgNum = -1;

//document.getElementById("whosRound").innerHTML = "Aan de beurt: Player " + beurt;
//img18.style.backgroundImage = "none";

document.getElementById("whosRound").innerHTML = "Aan de beurt: Player 1: ";

function imagefunc() {
	if(checkclick == 1){
	checkclick++;
	temp1 = arr[imgNum];
	tempImgNum = imgNum;
	console.log("klik 1, temp1 = " + arr[imgNum] + ", beurt is: " + beurt + ", tempImgNum = " + tempImgNum + ", imgNum = " + imgNum);
	} else {
		checkclick = 2;
		checkclick--;
		temp2 = arr[imgNum];
		console.log("klik 2, temp2 = " + arr[imgNum] + ", beurt is: " + beurt + ", tempImgNum = " + tempImgNum + ", imgNum = " + imgNum);
	}
	
	if(temp1 == temp2 && (tempImgNum != imgNum)){
		if(beurt == 1){
			player1points++;
			document.getElementById("player1").innerHTML = "Player 1: " + player1points;
		} else {
			player2points++;
			document.getElementById("player2").innerHTML = "Player 2: " + player2points;
		}
	}
	
	if(player1points + player2points == 9){
		if(player1points > player2points){
			document.getElementById("whosRound").innerHTML = "Player 1 won the memory game!";
		} else {
			document.getElementById("whosRound").innerHTML = "Player 2 won the memory game!";
		}
	}
}

function buttonNext() {
	let tempIMGstring = "" + tempImgNum;
	let imageNUMstring = "" + imgNum;
	
	//document.getElementById("next").style.backgroundImage = "none";
	if(temp1 != temp2){
		if(imgNum == 0){document.getElementById("img1").style.backgroundImage = "none";}
		if(imgNum == 1){document.getElementById("img2").style.backgroundImage = "none";}
		if(imgNum == 2){document.getElementById("img3").style.backgroundImage = "none";}
		if(imgNum == 3){document.getElementById("img4").style.backgroundImage = "none";}
		if(imgNum == 4){document.getElementById("img5").style.backgroundImage = "none";}
		if(imgNum == 5){document.getElementById("img6").style.backgroundImage = "none";}
		if(imgNum == 6){document.getElementById("img7").style.backgroundImage = "none";}
		if(imgNum == 7){document.getElementById("img8").style.backgroundImage = "none";}
		if(imgNum == 8){document.getElementById("img9").style.backgroundImage = "none";}
		if(imgNum == 9){document.getElementById("img10").style.backgroundImage = "none";}
		if(imgNum == 10){document.getElementById("img11").style.backgroundImage = "none";}
		if(imgNum == 11){document.getElementById("img12").style.backgroundImage = "none";}
		if(imgNum == 12){document.getElementById("img13").style.backgroundImage = "none";}
		if(imgNum == 13){document.getElementById("img14").style.backgroundImage = "none";}
		if(imgNum == 14){document.getElementById("img15").style.backgroundImage = "none";}
		if(imgNum == 15){document.getElementById("img16").style.backgroundImage = "none";}
		if(imgNum == 16){document.getElementById("img17").style.backgroundImage = "none";}
		if(imgNum == 17){document.getElementById("img18").style.backgroundImage = "none";}
		if(tempImgNum == 0){document.getElementById("img1").style.backgroundImage = "none";}
		if(tempImgNum == 1){document.getElementById("img2").style.backgroundImage = "none";}
		if(tempImgNum == 2){document.getElementById("img3").style.backgroundImage = "none";}
		if(tempImgNum == 3){document.getElementById("img4").style.backgroundImage = "none";}
		if(tempImgNum == 4){document.getElementById("img5").style.backgroundImage = "none";}
		if(tempImgNum == 5){document.getElementById("img6").style.backgroundImage = "none";}
		if(tempImgNum == 6){document.getElementById("img7").style.backgroundImage = "none";}
		if(tempImgNum == 7){document.getElementById("img8").style.backgroundImage = "none";}
		if(tempImgNum == 8){document.getElementById("img9").style.backgroundImage = "none";}
		if(tempImgNum == 9){document.getElementById("img10").style.backgroundImage = "none";}
		if(tempImgNum == 10){document.getElementById("img11").style.backgroundImage = "none";}
		if(tempImgNum == 11){document.getElementById("img12").style.backgroundImage = "none";}
		if(tempImgNum == 12){document.getElementById("img13").style.backgroundImage = "none";}
		if(tempImgNum == 13){document.getElementById("img14").style.backgroundImage = "none";}
		if(tempImgNum == 14){document.getElementById("img15").style.backgroundImage = "none";}
		if(tempImgNum == 15){document.getElementById("img16").style.backgroundImage = "none";}
		if(tempImgNum == 16){document.getElementById("img17").style.backgroundImage = "none";}
		if(tempImgNum == 17){document.getElementById("img18").style.backgroundImage = "none";}
	
		if(beurt == 1){
			beurt = 2;
			document.getElementById("whosRound").innerHTML = "Aan de beurt: Player 2: ";
		} else {
			beurt = 1;
			document.getElementById("whosRound").innerHTML = "Aan de beurt: Player 1: ";
		}
	}
}

img1.addEventListener("click", function() {
	img1.style.backgroundImage = "url('images/face" + image1 + ".png')";
	imgNum = 0;
	imagefunc();
});
img2.addEventListener("click", function() {
	img2.style.backgroundImage = "url('images/face" + image2 + ".png')";
	imgNum = 1;
	imagefunc();
});
img3.addEventListener("click", function() {
	img3.style.backgroundImage = "url('images/face" + image3 + ".png')";
	imgNum = 2;
	imagefunc();
});
img4.addEventListener("click", function() {
	img4.style.backgroundImage = "url('images/face" + image4 + ".png')";
	imgNum = 3;
	imagefunc();
});
img5.addEventListener("click", function() {
	img5.style.backgroundImage = "url('images/face" + image5 + ".png')";
	imgNum = 4;
	imagefunc();
});
img6.addEventListener("click", function() {
	img6.style.backgroundImage = "url('images/face" + image6 + ".png')";
	imgNum = 5;
	imagefunc();
});
img7.addEventListener("click", function() {
	img7.style.backgroundImage = "url('images/face" + image7 + ".png')";
	imgNum = 6;
	imagefunc();
});
img8.addEventListener("click", function() {
	img8.style.backgroundImage = "url('images/face" + image8 + ".png')";
	imgNum = 7;
	imagefunc();
});
img9.addEventListener("click", function() {
	img9.style.backgroundImage = "url('images/face" + image9 + ".png')";
	imgNum = 8;
	imagefunc();
});
img10.addEventListener("click", function() {
	img10.style.backgroundImage = "url('images/face" + image10 + ".png')";
	imgNum = 9;
	imagefunc();
});
img11.addEventListener("click", function() {
	img11.style.backgroundImage = "url('images/face" + image11 + ".png')";
	imgNum = 10;
	imagefunc();
});
img12.addEventListener("click", function() {
	img12.style.backgroundImage = "url('images/face" + image12 + ".png')";
	imgNum = 11;
	imagefunc();
});
img13.addEventListener("click", function() {
	img13.style.backgroundImage = "url('images/face" + image13 + ".png')";
	imgNum = 12;
	imagefunc();
});
img14.addEventListener("click", function() {
	img14.style.backgroundImage = "url('images/face" + image14 + ".png')";
	imgNum = 13;
	imagefunc();
});
img15.addEventListener("click", function() {
	img15.style.backgroundImage = "url('images/face" + image15 + ".png')";
	imgNum = 14;
	imagefunc();
});
img16.addEventListener("click", function() {
	img16.style.backgroundImage = "url('images/face" + image16 + ".png')";
	imgNum = 15;
	imagefunc();
});
img17.addEventListener("click", function() {
	img17.style.backgroundImage = "url('images/face" + image17 + ".png')";
	imgNum = 16;
	imagefunc();
});
img18.addEventListener("click", function() {
	img18.style.backgroundImage = "url('images/face" + image18 + ".png')";
	imgNum = 17;
	imagefunc();
});
next.addEventListener("click", function() {
	console.log("next");
	buttonNext();
});