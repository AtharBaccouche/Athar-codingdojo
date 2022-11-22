// parent Ninja class
class Ninja{
    constructor(name, health=12) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Ninja is  name  ${ this.name } `);
        return this;
    }
    showStats(){
        console.log(`Ninja is  name  ${ this.name } she has ${this.speed} speed, ${this.strength} strength, ${ this.health } health `)
        return this
    }
    drinkSake() {
        this.health += 10;
        return this
    }
}
const first_ninja = new Ninja("Athar");
first_ninja.sayName();

first_ninja.showStats();
first_ninja.sayName().drinkSake().showStats();