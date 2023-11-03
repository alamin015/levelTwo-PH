{
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
}
