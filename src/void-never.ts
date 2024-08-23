function logg(msg: string): void { // viod : return nothing
    console.log(msg);
}

function gg(msg : string) : never{
    while(true){
        console.log(msg);
    }
}

console.log("Start");
logg("Hello World");

