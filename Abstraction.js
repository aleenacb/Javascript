class Animal {
  sound() {
    throw new Error("Method must be implemented");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}
