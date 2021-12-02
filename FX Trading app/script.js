// EX 1
let person = {
    name: "Nicoleta",
    age: 52,
    qualities: ["kind", "loving", "animal lover"]
}
console.log(person.name);
let keys = Object.getOwnPropertyNames(person);
console.log(keys[1] + ": " + person.age)

console.log(keys[2] + ":");
let qual = person.qualities;
qual.forEach(element => {
    console.log(element)
});

// EX 2

let movie = {
    title: "Sleuth",
    time: 96,
    actors: ["Michael Caine", "Jude Law", "Harold Pinter"]
}

function displayMovie(movieParam) {
    let actors = movieParam.actors;

    console.log(`${movie.title} a durat ${movie.time} minute. Actori: ${actors.join(", ")}`)
}

displayMovie(movie);

// EX 3

let blackFridayCart = {
    telefon: "350",
    consola: "250",
    televizor: "450",
    iepurasPlus: "10.60",
    cercei: "20.34",
    geanta: "22.36"
};

function getSum(cartObj) {
    let values = Object.values(cartObj);
    let toNumber = values.map(item => Number(item)).reduce((acc, curr) => acc + curr, 0).toFixed(1);
    console.log(toNumber);

}

getSum(blackFridayCart)

// EX 4

Array.prototype.myMap = function(callbackFunction) {
    const array = this;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i])
        // newArray.push(callbackFunction(array[i]))
        newArray = [...newArray, callbackFunction(array[i])]
    }
    // newArray = array.map(multiplicator);
    console.log(newArray)
    return newArray;
}

function multiplicator(element) {
    return 2 * element;
}

[1, 2, 3].map(multiplicator); // [2,4,6]
[1, 2, 3].myMap(multiplicator); // [2,4,6]



// EX 5

Array.prototype.myFilter = function(callbackFunction) {
    const array = this;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackFunction(array[i])) {
            newArray.push(array[i])
        }
    }
    console.log(newArray);
    return newArray
}

function biggerThanFive(element) {
    return element > 4;
}

[1, 2, 3, 4, 5, 6, 7, 8, 9].filter(biggerThanFive); // [5,6,7,8,9]
[1, 2, 3, 4, 5, 6, 7, 8, 9].myFilter(biggerThanFive); // [5,6,7,8,9]


// EX 6

Array.prototype.myReduce = function(callbackFunction, initialVal) {
    const array = this;
    let accumulator = (initialVal === undefined) ? undefined : initialVal;
    // codul tau aici
    let sum;
    for (let i = 0; i < array.length; i++) {
        console.log((array[i]));
        // if (accumulator) {
        accumulator = callbackFunction(array[i], array[i] + 1);
        // }
    }
    console.log(accumulator);
    // return sum;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

[1, 2, 3, 4].reduce(reducer); // 10
[1, 2, 3, 4].myReduce(reducer); // 10