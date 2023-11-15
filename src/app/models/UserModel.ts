import { PizzaModel } from "./PizzaModel"

export type UserModel = {
    name: String;
    password: String;
    email: String,
    cart: PizzaModel[],
    role: String
}