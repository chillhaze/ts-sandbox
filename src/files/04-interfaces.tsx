// не удобный вариант записи
const badConfig: {
  selector: string;
  perPage: number;
  startIndex: number;
  draggable: boolean;
} = {
  selector: "#pligin-1",
  perPage: 2,
  startIndex: 0,
  draggable: false,
};

console.log("badConfig ", badConfig);
// удобный вариант записи

interface PluginConfig {
  readonly selector: string;
  perPage: number;
  startIndex?: number;
  draggable: boolean;
}

const config: PluginConfig = {
  selector: "#pligin-1",
  perPage: 2,
  // startIndex: 0,
  draggable: false,
};
console.log("config ", config);

interface Employees {
  [key: string]: number;
}

const employees: Employees = {
  mango: 50,
  poly: 10,
  ajax: 15,
};
console.log("employees ", employees);

// вычисляем топ сотрудника
const entries = Object.entries(employees);
console.log("entries", entries);

let bestEmpl = "";
let bestEmplIndex = 20;

for (const [name, value] of entries) {
  console.log("value:", value);

  if (bestEmplIndex <= value) {
    bestEmpl = name;
  }
}

console.log("name:", bestEmpl);

// наследование интерфейсов
interface Shape {
  color: string;
}

const shape: Shape = { color: "tomato" };

interface Square extends Shape {
  sideLength: number;
}

const square: Square = {
  sideLength: 10,
  color: "teal",
};

console.log(shape, square);

export {};
