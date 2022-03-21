const data: number[] = [1, 2, 3, 4, 5, 6];
console.log(data);

const items: Array<string> = ["asa", "sas", "sass", "dsda", "fef"];
console.log(items);

data.push(7);
console.log(data);

const types: (string | number | boolean)[] = ["hdhdfdadashd", 1, true, false];
console.log(types);

const restricted: readonly (string | number | boolean)[] = [
  "dfgdfd",
  1,
  true,
  false,
];

// restricted.push('isRestricted')
console.log(restricted);

//Tuple
const coords: [number, number] = [50.4501, 30.5234];
console.log(coords);

export {};
