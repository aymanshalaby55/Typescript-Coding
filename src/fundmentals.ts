console.log('je1rr0pr');


let num : any = "newLocal";
let any: number = 10;
let he: any = 1
he = "hi";

let hi: number | string | boolean = true;

let hell: string[] = ["hi", "i'm", "ayman"]
let click: (string | string[])[] = ["hii", ["val"]];
console.log(hell);


function show(name: number, age?: string) {
    console.log(name, age);
}

function addAll(...nums : number[]) {
   let res = 0;
   nums.forEach(e => {
    res += e;
   });
   return res;
}

console.log(addAll(10 ,20,30));
show(1);