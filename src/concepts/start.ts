// array
let mixed: (string | number)[] = []
mixed.push('hello')
mixed.push(20)

// object
let user: {firstName: string, age: number, id: number} = {
    firstName: 'Mario',
    age: 20,
    id: 1
}

// function
function yoga(...args: (number | string)[]) {
    console.log(args)
}
yoga('I love yoga', 2)

// tuples
const coordinates: [number, number] = [1.314, 5.67]

// named tuples
let user2: [name: string, age: number]
user2 = ['Mario', 20]