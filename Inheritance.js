class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

let d = new Dog();
d.sound();
d.bark();
