"use strict";
{
    // normal function
    function addFunc(num1, num2) {
        console.log(num1 + num2);
        return num1 + num2;
    }
    // addFunc("jsh".7) there will be an error
    addFunc(4, 5);
    //   arrow function
    const myFunc = (num1, num2 = 0) => num1 + num2;
    myFunc(7);
    //   object -->  funtion --> method
    const obj = {
        userName: "alamin",
        balance: 780,
        add(num) {
            return num + this.balance;
        },
    };
    console.log(obj.add(5));
    const testArr = [2, 3, 4, 5, 6];
    const square = testArr.map((item) => item * item);
    console.log(square);
    //
}
