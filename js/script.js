//Question 1

const outOfStock = true

//Why do we need an if else statement for this?
console.log(outOfStock)

if (outOfStock === true) {
    console.log("Out of stock")
} else if (outOfStock === false) {
    console.log("In stock")
}


// Question 2


for (var i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
        console.log(i)
    }
}

//Question 3

var games = [{
        title: "Grand Theft Auto",
        rating: 4.48,
    },
    {
        title: "Portal 2",
        rating: 3.5,
    },
    {
        title: "Team Fortress",
        rating: null,
    },
    {
        title: "The Witcher",
        rating: 3.0,
    },
    {
        title: "The Elder Scrolls",
        rating: 2.9,
    },
];

var gamesContainer = document.querySelector(".games")

for (var i = 0; i < games.length; i++) {

    var game = games[i]

    if (typeof game.rating === "number" && game.rating < 3.5) {
        gamesContainer.innerHTML += "<li>" + game.title + ": " + game.rating + "</li>"

    }


}

//Question 4

function whatIDontLike(items) {
    if (typeof items === "string") {
        console.log("I dont like " + items)
    } else {
        console.log("Please send in a string")
    }
}

whatIDontLike("animals");
whatIDontLike(2);
whatIDontLike(true);
whatIDontLike(null);

// Question 5

function subtractNumbers(num1, num2) {

    //Converting data to number
    var parseNum1 = parseInt(num1)
    var parseNum2 = parseInt(num2)

    var sumParse = parseNum1 - parseNum2

    var subtactionContainer = document.querySelector("#subtraction")

    if (isNaN(sumParse)) {
        console.log("Invalid arguemnt(s)")
    } else {
        console.log("Valid agrument(s)")
    }
    return subtactionContainer.innerHTML += "<p>" + sumParse + "</p>"

}
subtractNumbers(1, 42);
subtractNumbers(200, 150);
subtractNumbers(10, "50");
subtractNumbers("100", "400");
subtractNumbers("Ten", "One Hundred");
subtractNumbers(null, 123);

// Question 6

var changeStyle = document.querySelector(".page")
var heading = document.querySelector("h1")
var body = document.querySelector("body")
var ulElement = document.querySelector("ul")

changeStyle.onclick = function () {
    body.style.backgroundColor = "yellow"

    heading.innerHTML = "Updated heading";
    heading.style.color = "green"
    heading.style.fontStyle = "impact"
    heading.innerHTML = "<a href=#>" + heading.innerHTML + "</a>"

    ulElement.style.listStyle = "none"
    ulElement.style.padding = "0px"
}

// Question 7

var toys = [{
        name: "Lego",
        price: 15.6,
    },
    {
        name: "Master of the Universe",
        price: "28.3",
    },
    {
        name: "Barbie",
        price: null,
    },
    {
        name: "Mr Potato Head",
        price: 89.99,
    },
];

var sumPrice = document.querySelector(".price")
var showPrice = document.querySelector("#total")


sumPrice.onclick = function () {
    var sum = 0
    for (var i = 0; i < toys.length; i++) {
        const value = parseInt(toys[i].price)

        if (isNaN(value)) continue
        sum += value
    }
    console.log(sum)
    showPrice.innerHTML += sum
}