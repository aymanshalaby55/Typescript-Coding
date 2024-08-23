/*
generics in TS are used to create reusable functions and classes. They allow us to work with collections of
    different types without losing type safety.

*/ 
// function with generic type
function genericFunction<GenericType>(arg: GenericType): GenericType {
    return arg;
}
const myNum = <T>(val : T) => val;

genericFunction(10); // works
genericFunction<string>("Hello World"); // works


// multiple types in generic type
function genericFunctionWithMultipleTypes<T1, T2>(arg1: T1, arg2: T2): [T1, T2] {
    return [arg1, arg2];
}

genericFunctionWithMultipleTypes<string, number>("Hello", 10); // works

// class with generic type

class GenericClass<T = number> {
    private data: T;

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}

const myObj = new GenericClass<string>("Hello World");
const myObj2 = new GenericClass<string | boolean>(true);


// interfaces with generic type

interface GenericInterface<T> {
    data: T;
}

class GenericClassWithInterface implements GenericInterface<string> {
    data: string;

    constructor(data: string) {
        this.data = data;
    }
}