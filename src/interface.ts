interface User {
    readonly id: number;
    name: string;
    age?: number;
    sayHello?: void;
}

// override interface properties
interface User {
    dateOfBirth: Date;
}

interface min {


}

//extending interface properties
interface Admin extends User, min {


}

// let user: User = {
//     id: 1,
//     name: "ayman",
//     age: 30,
//     dateOfBirth: new Date("1990-01-01")
// }
/////////////////////////////////////////////////////////////////////////

