# Programming Hero --> Level Two Course

## Typescript --> First Module

> [!IMPORTANT]
> explicit --> it describes something that is very clear and without vagueness or ambiguity
> implicit --> implicit describes things in which a meaning is implied or hinted at rather than being expressed directly.

```ts
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
```
