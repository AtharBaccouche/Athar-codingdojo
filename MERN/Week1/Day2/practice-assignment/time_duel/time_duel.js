class Cards {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

}

class Unit_Cards extends Cards {
    constructor(name, cost, power,resilience) {
        super(name , cost);
        this.power = power;
        this.resilience = resilience;
    }
}

class Effect_Cards extends Cards {
    constructor(name, cost, power,resilience) {
        super(name , cost);
        this.power = power;
        this.resilience = resilience;
    }
}










const redbeltninja = new Unit_Cards("Red Belt Ninja",3,3,4);