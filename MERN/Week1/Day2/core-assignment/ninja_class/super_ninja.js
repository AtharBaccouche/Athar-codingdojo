//parent Ninja class
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

// child class
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    // simple function in the child class
    speakWisdom() {
        // by using super, we can call the parent method
        const mes = super.drinkSake();
        console.log(mes);
        console.log ("What one programmer can do in one month, two programmers can do in two months")
    }
}


const super_ninja = new Sensei("Athar");
super_ninja.speakWisdom();

super_ninja.showStats();
//first_ninja.sayName().drinkSake().showStats();