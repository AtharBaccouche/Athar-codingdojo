class Ninja:
    def __init__(self, first_name,last_name,pet,treats, pet_food):
        self.first_name= first_name
        self.last_name= last_name
        self.pet=pet
        self.treats=treats
        self.pet_food= pet_food
    def walk(self):
        Pet.play()
        return self
    def feed(self):
        Pet.eat()
        return self
    def bathe(self):
        Pet.noise()
        return self

class Pet:
    def _init_(self, type, tricks, health, energy):
        self.type=type
        self.tricks=tricks
        self.health=100
        self.energy=energy
    def sleep(self):
        self.energy +=25
        return self
    def eat(self):
        self.energy +=5
        self.health +=10
        return self
    def play(self): 
        self.energy+=5
        return self
    def noise(self):
        print("sound")




