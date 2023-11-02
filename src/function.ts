{
  // normal function
  function addFunc(num1: number, num2: number): number {
    console.log(num1 + num2);
    return num1 + num2;
  }

  // addFunc("jsh".7) there will be an error
  addFunc(4, 5);

  //   arrow function
  const myFunc = (num1: number, num2: number = 0): number => num1 + num2;
  myFunc(7);

  //   object -->  funtion --> method
  const obj = {
    userName: "alamin",
    balance: 780,
    add(num: number): number {
      return num + this.balance;
    },
  };
  console.log(obj.add(5));

  const testArr: number[] = [2, 3, 4, 5, 6];
  const square: number[] = testArr.map((item: number): number => item * item);
  console.log(square);

  //
}
