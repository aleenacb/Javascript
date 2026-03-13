class Student {
  constructor(name) {
    this.name = name;
  }

  display() {
    console.log("Name:", this.name);
  }
}

let s = new Student("Aleena");
s.display();
