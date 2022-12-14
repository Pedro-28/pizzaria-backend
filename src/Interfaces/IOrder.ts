import IPizza from "./IPizza";
import { IOrdersPizzas } from "./IOrdersPizzas";
import { IUser } from "./IUser";

export interface IOrder {
  id?: string;
  user: IUser;
  totalPrice: number;
}

type IPizzasOrdersDTO = {
  pizzaId: string;
  size: string;
  border: boolean;
  quantity: number;
};

export interface IOrderDTO {
  userId: string;
  pizzas: IPizzasOrdersDTO[];
}
