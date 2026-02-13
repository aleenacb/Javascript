function Person(name) {
    this.name  = name;

    this.sayName = function() {
        console.log(this.name);
    };
    setTimeout(function() {
        console.log(this.name);//undefined
    }.bind(this),1000);//Fix with bind
}
const G = new Person("Aleena");
G.sayName();