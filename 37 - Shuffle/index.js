// Fisher - Yates algorithm

const card = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

function Shuffle(array) {
    for(var i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        //destructuring
        [array[i], array[random]] = [array[random], array[i]];
    }
}

Shuffle(card);

console.log(card);

