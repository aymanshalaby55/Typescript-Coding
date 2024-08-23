abstract class Food {
    constructor(public name: string, public price: number) {

    }

    abstract getcooking(): void; // abstract method : method must be implemented in subclass
}


class Pizza extends Food {
    constructor(public size: string, public toppings: string[]) {
        super("Pizza", 10);
    }
    getcooking() {
        console.log("Cooking pizza with size: " + this.size + " and toppings: " + this.toppings.join(", "));
    }
}

class Burger extends Food {
    constructor(public breadType: string, public meatType: string) {
        super("Burger", 5);
    }
    getcooking() {
        console.log("Cooking burger with bread type: " + this.breadType + " and meat type: " + this.meatType);
    }
}