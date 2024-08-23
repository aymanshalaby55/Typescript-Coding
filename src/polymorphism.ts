class Player {
    constructor(public name: string) {

    }

    attack(): void {
        console.log(`${this.name} attacks!`);
    }
}

class Mage extends Player {
    constructor(name: string, public spread: number) {
        super(name);

    }
    override attack(): void {
        // super.attack();
        console.log(`${this.name} casts a spread!`);
        this.spread--;
    }
}

class Barberian extends Player {
    constructor(name: string, public axeDurability: number) {
        super(name);
    }
    override attack(): void {
        // super.attack();
        console.log(`${this.name} cuts the hair!`);
        this.axeDurability--;
    }

}