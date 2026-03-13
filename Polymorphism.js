class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Cat meows");
  }
}

let a = new Cat();
a.sound();
