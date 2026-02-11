function ScopeEx (){
    let x = 10;
    var y = 20;
    const z = 30;
    console.log(x, y, z);
}
    console.log(ScopeEx());

    //Modular Scope
    const PI = 3.14;
    function add(a, b) {
        return a +  b;
    }
    console.log(add(2,3));
    /*block scope
    if(true) {
        let k = 10;
        var v = 20;
        const c = 30;
    }
    console.log(k, v, c);*/

   //Lexical scope
   function Outer() {
    let outerVar = "I am in the Outer scope";
    function Inner() {
        console.log(outerVar);
    }
    Inner();
   }
   Outer();

   //SImple prog
   let globalVar = "This is the global variable";
   function Local() {
    LocalLet = "This is a Local Variable";
   }
   Local();
   console.log(globalVar);
   console.log(LocalLet);

