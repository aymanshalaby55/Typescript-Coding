// alias
type st = string;
type StNUM = number | st; // string or number
type button = {
    up : string,
    right : string,
    down : string,
    left : string
}

function move(b : button) : void {
    console.log(b.up, b.right, b.down, b.left);  // show button actions
}

move({up: "up", right: "right", down: "down", left: "left"})

let s : st = "hello";

let all : StNUM = 10;
all = "hello";




