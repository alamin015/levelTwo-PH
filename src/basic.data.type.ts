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
