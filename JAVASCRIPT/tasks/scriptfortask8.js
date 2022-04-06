`use strict`

function func(){
    x = `foo`;
    if (x) {
        y = `bar`;
    }
}
console.log(x); // return foo
console.log(y); // return ref error

function doSomething() {
    console.log(a);
    console.log(foo());
    let a = 1;
    function foo() {
      return 2;
    }
  }
  doSomething(); // ref error