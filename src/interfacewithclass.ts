interface setting {
    theme : boolean;
    font? : string;
    save(): void
}

class Member implements setting{
    constructor(public theme : boolean){

    }
    save(): void {
        console.log('saved');
    }
}