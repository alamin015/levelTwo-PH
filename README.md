## Programming Hero --> Level Two Course

## Typescript --> First Module

> [!IMPORTANT]
> question and answer

- explicit --> it describes something that is very clear and without vagueness or ambiguity
- implicit --> implicit describes things in which a meaning is implied or hinted at rather than being expressed directly.

```ts
{
  /**
   * primitive and referance (no-primitive) value in typescript
   * primitive -> string | number | boolean | undefined | null | symbol
   * referance -> Array | Object | Tuple
   */

  //   String
  let userName: string = "alamin";
  // number
  let age: number = 89;
  // boolean
  let isMarried: boolean = true;
  //   undefined
  let nothing: undefined = undefined;
  // null
  let users: null = null;
  // array
  let friends: string[] = ["rubel", "habibur", "aksh"];
  //   friends.push(7) /*Argument of type 'number' is not assignable to parameter of type 'string' */
  const ages: number[] = [23, 34, 2, 12, 45, 33, 45];

  //   Tuple
  const student: [string, number] = ["almain", 67]; //Tuple example important
}
```

> [!IMPORTANT]
> Object, Optional Type & Literal Type

```ts
const user: {
  companyName: "programming hero"; // literal Type
  firstName: string;
  middleName?: string; // optional type
  readonly lastName: string;
} = {
  companyName: "programming hero",
  firstName: "abdul",
  lastName: "halim",
};

//   user.lastName = "jashgdahdag" there is an error bcz readonly property cann't be changed
```

> [!IMPORTANT]
> Function

```ts
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
```

> [!IMPORTANT]
> Spread operator & rest operator practice

```ts
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
```

> [!IMPORTANT]
> Destructuring from object & array

```ts
const self = {
  name: "habib",
  age: 76,
  time: {
    gaming: ["pubg", "cricket", "football"],
    study: {
      upper: "krishnanagar hossenia high school",
      lower: "NMHS",
    },
  },
};

const {
  time: { study: { lower: mySchool } = {} },
} = self;
console.log(mySchool);

const allFriends: string[] = ["halim", "rubel", "habbibur", "aksh", "sky"];
const [, bestFrind, ...rest] = allFriends;
```

> [!IMPORTANT]
> Type aliase

```ts
type Tstudent = {
  name: string;
  age: number;
  contactNo?: string; //optional
  isMarried: boolean;
};
const student1: Tstudent = {
  name: "alamin",
  age: 23,
  contactNo: "09999999",
  isMarried: false,
};

type sample = (num: number) => number;
const myFunc: sample = (a) => {
  return a;
};
```
