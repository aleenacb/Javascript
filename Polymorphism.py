class Animal:
    def sound(self):
        print("Animal sound")

class Cat(Animal):
    def sound(self):
        print("Cat meows")

a = Cat()
a.sound()
