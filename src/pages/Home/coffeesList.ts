import { Coffee } from "../../components/CoffeeCard";
import Coffe_0 from "../../assets/Coffee-0.png";
import Coffe_1 from "../../assets/Coffee-1.png";
import Coffe_2 from "../../assets/Coffee-2.png";
import Coffe_3 from "../../assets/Coffee-3.png";
import Coffe_4 from "../../assets/Coffee-4.png";
import Coffe_5 from "../../assets/Coffee-5.png";
import Coffe_6 from "../../assets/Coffee-6.png";
import Coffe_7 from "../../assets/Coffee-7.png";
import Coffe_8 from "../../assets/Coffee-8.png";
import Coffe_9 from "../../assets/Coffee-9.png";
import Coffe_10 from "../../assets/Coffee-10.png";
import Coffe_11 from "../../assets/Coffee-11.png";
import Coffe_12 from "../../assets/Coffee-12.png";
import Coffe_13 from "../../assets/Coffee-13.png";

export const coffeeList: Coffee[] = [
  {
    id: 0,
    amount: 1,
    description: "O tradicional café feito com água quente e grãos moídos",
    name: "Expresso Tradicional",
    price: 9.9,
    types: ["Tradicional"],
    image: Coffe_0,
  },
  {
    id: 1,
    amount: 1,
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    name: "Café com Leite",
    price: 9.9,
    types: ["Tradicional", "Com leite"],
    image: Coffe_1,
  },
  {
    id: 2,
    amount: 1,
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    name: "Mocaccino",
    price: 9.9,
    types: ["Tradicional", "Com leite"],
    image: Coffe_2,
  },
  {
    id: 3,
    amount: 1,
    description: "Bebida preparada com grãos de café árabe e especiarias",
    name: "Árabe",
    price: 9.9,
    types: ["Especial"],
    image: Coffe_3,
  },
  {
    id: 4,
    amount: 1,
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    name: "Latte",
    price: 9.9,
    types: ["Tradicional", "Com leite"],
    image: Coffe_4,
  },
  {
    id: 5,
    amount: 1,
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    name: "Chocolate Quente",
    price: 9.9,
    types: ["Especial", "Com leite"],
    image: Coffe_5,
  },
  {
    id: 6,
    amount: 1,
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    name: "Irlandês",
    price: 9.9,
    types: ["Especial", "Alcoólico"],
    image: Coffe_6,
  },
  {
    id: 7,
    amount: 1,
    description: "Café expresso tradicional com espuma cremosa",
    name: "Expresso Cremoso",
    price: 9.9,
    types: ["Tradicional"],
    image: Coffe_7,
  },
  {
    id: 8,
    amount: 1,
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    name: "Capuccino",
    price: 9.9,
    types: ["Tradicional", "Com leite"],
    image: Coffe_8,
  },
  {
    id: 9,
    amount: 1,
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    name: "Cubano",
    price: 9.9,
    types: ["Especial", "Alcoólico", "Gelado"],
    image: Coffe_9,
  },
  {
    id: 10,
    amount: 1,
    description: "Bebida preparada com café expresso e cubos de gelo",
    name: "Expresso Gelado",
    price: 9.9,
    types: ["Tradicional", "Gelado"],
    image: Coffe_10,
  },
  {
    id: 11,
    amount: 1,
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    name: "Macchiato",
    price: 9.9,
    types: ["Tradicional", "Com leite"],
    image: Coffe_11,
  },
  {
    id: 12,
    amount: 1,
    description: "Bebida adocicada preparada com café e leite de coco",
    name: "Havaiano",
    price: 9.9,
    types: ["Especial"],
    image: Coffe_12,
  },
  {
    id: 13,
    amount: 1,
    description: "Expresso diluído, menos intenso que o tradicional",
    name: "Expresso Americano",
    price: 9.9,
    types: ["Tradicional"],
    image: Coffe_13,
  },
];
