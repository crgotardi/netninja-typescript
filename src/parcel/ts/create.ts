import { PizzaProps, Pizza } from "./models/Pizza"

const form = document.querySelector('.create') as HTMLFormElement

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const data = new FormData(form)

    const newPizza: PizzaProps = {
        title: data.get('title') as string,
        description: data.get('description') as string,
        price: Number(data.get('price') as string),
        toppings: data.getAll('toppings') as string[]
    }

    const res = await Pizza.save(newPizza)

    if (!res.ok) {
        throw new Error('unable to save the pizza')
    }

    window.location.href = '/'
})

