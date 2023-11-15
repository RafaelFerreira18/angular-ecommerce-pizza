import { FileHandler } from "./FileHandler.model"

export type PizzaModel = {
    id: Number,
    pizzaName: String,
    description: String,
    price:Number,
    pizzaImg: FileHandler
}