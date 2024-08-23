class User {
    protected _userName: string;
    private msg : () => string;
    // backward before varibale means it is private
    constructor(_userName: string, private salary: number) { // you can put access modifiers to properties in constructor
       this._userName = _userName;
       this.salary = 1000;
       User.created++;
       this.msg = () => {
           return `Hello, ${this.userName}! Your salary is ${this.salary}.`;
       }
    }

    // getters and setters
    get getUserName(): string {
        return this._userName;
    }
    set userName(value: string) {
        this._userName = value;
    }

    // static member 
    private static created :number = 0;
    static increaseCreatedCount(): void {
    console.log(`User created: ${User.created}`);
    }
}

let ayman : User = new User("Ayman", 2000);

// update with getter and setter
ayman.userName = "ayman_new";
console.log(ayman.getUserName);
// console.log(ayman.userName);
// console.log(ayman.msg());
User.increaseCreatedCount
/////////////////////////////////////// interface with class
interface setting {
    theme : boolean;
    font? : string;
    save(): void
}

class member implements setting{
    constructor(public theme : boolean){

    }
    save(): void {
        console.log('saved');
    }
}