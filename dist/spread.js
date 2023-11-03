"use strict";
{
    // array
    const userName = ["alamin", "hasan", "rifat"];
    const adminName = ["mahbub", "habib"];
    const allName = [...userName, ...adminName]; //spread operator
    userName.push(...adminName);
    console.log(allName);
    //   object
    const mentors = {
        redux: "Tanny Rahman",
        mongodb: "unknown",
    };
    const anotherM = {
        next: "mahbub",
    };
    const newObj = Object.assign(Object.assign({}, mentors), anotherM);
    // learn rest opeartor
    function myFunc(num) {
        const sum = num.reduce((num1, num2) => {
            if (num2 % 2 === 0) {
                return num1 + num2;
            }
            return num1;
        });
        return sum;
    }
    //   console.log(myFunc([4, 3, 5, 7, 9, 10]));
    const club = (...frinds) => {
        frinds.forEach((ele) => console.log(`my friend is ${ele}`));
    };
    club("halim", "tanny", "rubel", "habubur");
    //
}
