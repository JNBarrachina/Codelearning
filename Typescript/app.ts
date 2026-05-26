
type Pizza = {
    id: number,
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: string,
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { id: 1, name: "Margarita", price: 8 },
    { id: 2, name: "Pepperoni", price: 9.5 },
    { id: 3, name: "Prosccuito e funghi", price: 9 },
    { id: 4, name: "4 Quesos", price: 10 },
]

let cashRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []

const addNewPizza = (newPizza: Pizza) => {
    menu.push(newPizza)
}

const placeOrder = (pizzaName: string) => {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name.toLowerCase() === pizzaName.toLowerCase())

    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }

    cashRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza.name, status: "ordered" }
    orderQueue.push(newOrder)

    return newOrder
}

const completeOrder = (orderId: number) => {
    const registeredOrder = orderQueue.find(pizzaOrdered => pizzaOrdered.id === orderId)

    if (!registeredOrder) {
        console.error(`${orderId} was not found.`)
        return
    }

    registeredOrder.status = "completed"
    return registeredOrder
}

const getPizzaDetail = (pizzaId: number | string) => {

    const foundPizza = menu.find(pizza => pizza.id === pizzaId)

    if (!foundPizza) {
        console.error(`Pizza with that id doesn's exist`)
        return
    }

    return foundPizza
}

addNewPizza({ id: 5, name: "Vegetal", price: 9.5 })
addNewPizza({ id: 6, name: "Barbacoa", price: 10 })
addNewPizza({ id: 7, name: "Carbonara", price: 10 })
console.log(getPizzaDetail("1"))

placeOrder("Barbacoa")
completeOrder(1)

console.log(menu)
console.log(cashRegister)
console.log(orderQueue)
