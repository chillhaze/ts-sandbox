const addExpression = function (x: number, y: number): string {
  return (x + y).toString();
};
const res: string = addExpression(5, 6);
console.log(res);

const arrowFunc = (x: number, y: number): string => (x + y).toString();
console.log(arrowFunc(2, 2));

const fn = (a: number, b: string, ...restParams: number[]) => {};
fn(1, "sss", 3, 4, 6, 7);

type AddFn2 = (a: number, b: string) => number;
const fn2: AddFn2 = (a, b) => 1;
fn2(2, "dwdwd");

// еще одир вариант
// type AddFn3 = (a: number, b: string, ...restParams: number[]) => number;
// const fn3: AddFn3 = (a, b, ...c) => 1;
// fn3(1, "sss", 3, 4, 6, 7);

// пример типизирования через interface
interface IAddFn3 {
  (a: number, b: string, ...restParams: number[]): number;
}

const fn3: IAddFn3 = (a, b, ...c) => 1;
fn3(1, "sss", 3, 4, 6, 7);

type LogFn = (m: string) => void;

const log: LogFn = (message) => {};
log("hshshs");

// Более сложный прример
// сначала создается интерфейс, типы, продумываем что
// методы принимают и что будут возвращать, потом пишем саму логику.

enum PizzaSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}

interface IPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
  toppings: string[];
  //logSize?: ()=> void  --старый синтаксис описания функции без явного возврата;
  //logSize?(): void;  -- новый синтаксис описания функции без явного возврата;
  logSize(): void;
  getSize(): string;
  addTopping(topping: string): void;
}

const pizza: IPizza = {
  size: PizzaSize.Small,
  toppings: ["sause", "mushroomms"],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(topping) {
    this.toppings.push(topping);
  },
};

console.log(pizza);

export {};
