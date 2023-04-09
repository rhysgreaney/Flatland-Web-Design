var square = document.getElementById('square');

function changeColour(colour) {
    square.style.background = colour;
}

/* function clicked is where my coding was failing, went back through tutorial and updated, as typed below 
issue was with var msg, now a functioning webpage */

function clicked() {
    /* var msg = "Build a<br>" + createBuzzwordPhrase
    words.innerHTML = msg; this coding didn't work, went back through tutorial and updated */
    words.innerHTML = "Build a<br>" + createBuzzwordPhrase();
}

square.addEventListener('click', (event) => clicked());

/*create hover effect */
square.addEventListener('mouseover', (event) => changeColour ('grey'));
square.addEventListener('mouseout', (event) => changeColour ('red'));

var words = document.getElementById('words');

function greeting() {
    words.innerHTML = "Welcome to Flatland <br> I am Square!"
}

document.onload = greeting()

function createBuzzwordPhrase() {
    /* See https://en.wikipedia.org/wiki/List_of_buzzwords */
    let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

    let idx_buz = Math.floor(Math.random() * buzz.length);
    let idx_act = Math.floor(Math.random() * action.length);
    let idx_out = Math.floor(Math.random() * outcome.length);

    return  buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}

console.log('createBuzzwordPhrase')