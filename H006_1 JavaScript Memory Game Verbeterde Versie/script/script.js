let divImagesIds;
let img = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
let selectedPlayer = 1;
let countSelectedCards = 0;
let isCardLocked = false;

let imageClicked1;
let imageClicked2;
let indexImg1;
let indexImg2;

let scorePlayer1 = 0;
let scorePlayer2 = 0;

let isGameFinished = false;

//TODO check imageClicked1 and 2, if the same, then give point +1 to player num...

removeText();
shuffleImgArray(img);
addAllImages();
hideAllImages();

/**
 * function that removes text from id img1 to img18.
 */
function removeText() {
    for (let i = 1; i <= 18; i++) {
        divImagesIds = document.getElementById("img" + i);
        divImagesIds.innerHTML = '';
    }
}

/**
 * function that shuffles image array.
 * deze link heeft mij geholpen:
 * https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
 */
function shuffleImgArray(img) {
    for (let i = img.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = img[i];
        img[i] = img[j];
        img[j] = temp;
    }
    // console.log(img);
    // console.clear();
}

/**
 * adds the images in place, this function does not update the image placements.
 */
function addAllImages() {
    for (let i = 0; i < img.length; i++) {
        divImagesIds = document.getElementById("img" + (i + 1));
        divImagesIds.style.backgroundImage = "url('images/face" + img[i] + ".png')";
        divImagesIds.style.backgroundSize = "100% 100%";
    }
}

/**
 * hides images when the website loads the javascript file.
 */
function hideAllImages() {
    for (let i = 0; i < img.length; i++) {
        divImagesIds = document.getElementById("img" + (i + 1));
        divImagesIds.style.backgroundImage = "url('images/questionmark.png')";
        divImagesIds.style.backgroundSize = "100% 100%";
    }
}

/**
 * shows images and increments when cards is clicked.
 * when selected cards count is not on 0 or 1, then cards are locked.
 * @param num
 */
function clickedImg(num) {
    if (isGameFinished == false) {
    divImagesIds = document.getElementById("img" + num);

    if (countSelectedCards == 0) {
        divImagesIds.style.backgroundImage = "url('images/face" + img[num - 1] + ".png')";
        imageClicked1 = img[num - 1];
        indexImg1 = num;
        countSelectedCards++;
    } else if (countSelectedCards == 1) {
        divImagesIds.style.backgroundImage = "url('images/face" + img[num - 1] + ".png')";
        imageClicked2 = img[num - 1];
        indexImg2 = num;
        countSelectedCards++;
        isCardLocked = true;
        addPoint();
        finishGame();
    }

    // console.log("countSelectedCards = " + countSelectedCards);
    // console.log("imageClicked1 = " + imageClicked1);
    // console.log("imageClicked2 = " + imageClicked2);
    // console.log("selectedPlayer = " + selectedPlayer);
    // console.log("num = " + num);
    // console.log("isCardLocked = " + isCardLocked);
    // console.log("\n");

    }
}

/**
 * add one point to the player with the matching cards.
 */
function addPoint() {
    if (imageClicked1 == imageClicked2) {
        if (selectedPlayer == 1) {
            scorePlayer1++;
            document.getElementById("p1Score").innerHTML = "score: " + scorePlayer1;
        } else {
            scorePlayer2++;
            document.getElementById("p2Score").innerHTML = "score: " +  scorePlayer2;
        }
    }
}

/**
 * resets the mismatching cards.
 */
function noMatchCards(num1, num2) {
    if (imageClicked1 != imageClicked2) {
        // console.log("noMatchCards function is called.");
        // console.log("img " + num1 + " is hidden now");
        // console.log("img " + num2 + " is hidden now");
        divImagesIds = document.getElementById("img" + num1);
        divImagesIds.style.backgroundImage = "url('images/questionmark.png')";
        divImagesIds = document.getElementById("img" + num2);
        divImagesIds.style.backgroundImage = "url('images/questionmark.png')";
    }
}

/**
 * text changes when next button is clicked and shows who's round it is.
 */
function newRound() {
    if (isGameFinished == false) {
        if (isCardLocked == true) {
            noMatchCards(indexImg1, indexImg2);

            //When no cards were matching, change round for player.
            if (imageClicked1 != imageClicked2) {
                if (selectedPlayer == 1) {
                    selectedPlayer = 2;
                } else {
                    selectedPlayer = 1;
                }
            }

            document.getElementById("playerRoundTXT").innerHTML = "speler " + selectedPlayer + " is aan de beurt!";
            countSelectedCards = 0;
            isCardLocked = false;
        }
    }
}

/**
 * This methods checks who won the game.
 * It will change some html content >:)
 */
function finishGame() {
    if (scorePlayer1 + scorePlayer2 == 9 && scorePlayer1 > scorePlayer2) {
        document.getElementById("playerRoundTXT").innerHTML = "speler 1 heeft GEWONNEN!!!";
        isGameFinished = true;
    }
    if (scorePlayer1 + scorePlayer2 == 9 && scorePlayer2 > scorePlayer1) {
        document.getElementById("playerRoundTXT").innerHTML = "speler 2 heeft GEWONNEN!!!";
        isGameFinished = true;
    }
}