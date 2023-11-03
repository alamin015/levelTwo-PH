{
  // array
  const userName: string[] = ["alamin", "hasan", "rifat"];
  const adminName: string[] = ["mahbub", "habib"];

  const allName: string[] = [...userName, ...adminName]; //spread operator
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

  const newObj = { ...mentors, ...anotherM };

  // learn rest opeartor
  function myFunc(num: number[]): number {
    const sum = num.reduce((num1: number, num2: number): number => {
      if (num2 % 2 === 0) {
        return num1 + num2;
      }
      return num1;
    });
    return sum;
  }
  //   console.log(myFunc([4, 3, 5, 7, 9, 10]));
  const club = (...frinds: string[]): void => {
    frinds.forEach((ele) => console.log(`my friend is ${ele}`));
  };
  club("halim", "tanny", "rubel", "habubur");
  //
}
