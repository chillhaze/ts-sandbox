// interface IParams {
//   constructor(
//     a: string,
//     b: string[]
//   ): {
//     name: string;
//     toppings: string[];
//   };
// }

interface IParams {
  size: string;
  toppings: string[];
}

interface IPizza {
  name: string;
  size: string;
  toppings: string[];
  addTopping(topping: string): void;
}

class Pizza implements IPizza {
  public name: string;
  public size: string = "sasaa";
  public toppings: string[];
  private anyProperty: string = "any property";

  constructor(name: string, { size, toppings = [] }: IParams) {
    this.name = name;
    this.size = size;
    this.toppings = toppings;
  }

  private validateTopping(topping: string): boolean {
    console.log(topping, this.anyProperty);

    return true;
  }

  public addTopping(topping: string) {
    //проверка работы приватного свойства
    console.log(this.validateTopping(topping));

    this.toppings.push(topping);
  }
}

const pizza = new Pizza("medium pizza", {
  size: "medium",
  toppings: ["cheese", "bbq-sause"],
});
console.log(pizza);

const params = {
  size: "large",
  toppings: ["anything", "bbq-sause", "cheese"],
};
const doublePizza = new Pizza("double pizza", params);
console.log(doublePizza);

export {};
