type nm = 0 | 1 | -1
let comp = (num1: number, num: number): nm => {
    if (num1 > num) { return 1; }
    else if (num1 < num) { return 0; }
    else return -1;
}

comp(5, 5); // should return 0
comp(7, 5); // should return 1
comp(5, 7); // should return -1