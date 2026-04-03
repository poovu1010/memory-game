

const tile = document.querySelectorAll(".a1");
const game_border = document.querySelector(".game-border");
const scor = document.querySelector(".score");
const moves = document.querySelector(".moves");
const reset_btn = document.querySelector(".reset");
const star3 = document.querySelector(".star3");
const star2 = document.querySelector(".star2");
const finish = document.querySelector(".finish");

const emojis = ['🍎', '🍌', '🍇', '🍉', '🍒', '🥝', '🍍', '🥭'];
const array = emojis.concat(emojis);

// div create

let score = 0
let move = 0


// fisher yates algo

function suffle(emojis16) {
    for (let i = emojis16.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [emojis16[i], emojis16[j]] = [emojis16[j], emojis16[i]];
    }
    return emojis16;

}
suffle(array)
array.forEach(element => {


    const div = document.createElement("div")

    div.textContent = "!"
    div.classList.add("a1");
    game_border.append(div);


});

let card = document.querySelectorAll(".a1")
//card flip
console.log(card)

let flipped = []

card.forEach((a, i) => {
    let click = 0;

    a.addEventListener('click', (event) => {

        if (flipped.length == 2) {
            return;
        }
        a.classList.add("flip");
        flipped.push(a);
        event.target.textContent = array[i]
        if (flipped.length == 2) {
           
            setTimeout(() => {

                if (flipped[0].textContent != flipped[1].textContent) {
                    flipped[0].classList.remove("flip")
                    flipped[0].textContent = "!"
                    flipped[1].classList.remove("flip")
                    flipped[1].textContent = "!"
                    console.log(flipped)

                    flipped = []
                    addmove()
                } else {
                    flipped[0].textContent = array[i]
                    flipped[1].textContent = array[i]
                    flipped = []
                    console.log(flipped)
                    addScore()
                    console.log(score)
                    addmove()
                    if (score == 16&& move <=45) {
                        game_border.style.display = "none";
                        finish.style.display="block"
                        star3.style.display="inline";
                    }


                }

            }, 1000)


        }

        click++;
    })

})


reset_btn.addEventListener('click', () => {
    console.log("btn")
    score = 0
    move = 0
    scor.textContent = `SCORE: ${score}`;
    moves.textContent = `MOVES: ${move}`
})
function addScore() {
    score = score + 2;
    scor.textContent = `SCORE: ${score}`;
}

function addmove() {
    move = move + 1;
    moves.textContent = `MOVES: ${move}`


}






