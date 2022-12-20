const words = ["girl", "school", "programming", "bestie", "hair", "animal", "weather", "sun", "poster", "maroon", "candy", "diary", "member", "iphone", "website", "cucumber", "kindness", "money", "stars", "beauty", "dress", "family", "melody", "disco", "birthday", "party"];

const content = document.querySelector('.word');
let currentLetters;
let currentPosition;
let maxPosition;


addEventListener('load', function() {
    addWord();
});


addEventListener('keydown', function(event) {
    const pressedKey = event.key;
    const currentSpan = document.querySelector('#letter' + currentPosition);
    if (currentLetters[currentPosition] != pressedKey) {
        currentSpan.classList.add('w');
    } else {
        currentSpan.classList.remove('w');
        currentSpan.classList.add('c');
        currentPosition++;
        if (currentPosition > maxPosition) {
            addWord();
        }
    }
});


function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getRandomWord() {
    const randomNumber = generateRandomInt(0, words.length - 1);
    return words[randomNumber];
}


function addWord() {
    content.innerHTML = '';
    const fragment = new DocumentFragment();
    currentLetters = getRandomWord().slice('');

    for (let i = 0; i < currentLetters.length; i++) {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = currentLetters[i];
        letterSpan.setAttribute('id', 'letter' + i);
        fragment.appendChild(letterSpan);
    }

    content.appendChild(fragment);
    currentPosition = 0;
    maxPosition = currentLetters.length - 1;
}