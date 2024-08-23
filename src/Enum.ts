enum level {
    kids,
    easy,
    medium,
    hard
}

const enum color { // preservre original value
    red = 10,
    blue = 15,
    green = blue
}

function printLevel() {
    return 5;
}
enum kid {
    insa, // no need for initial value in first enum member
    five = 25,
    seven = level.easy,
    ten = 15,
    elev = printLevel(),
    // any memeber must have initalizer
}

let easy: string = "easy"

if (easy === "easy") {
    console.log(level.easy);
}