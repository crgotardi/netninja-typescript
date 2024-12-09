function logAndReturnValue<T>(value: T): T {
    console.log(value)
    return value
}

logAndReturnValue('pokemon')

function getRandomArrayValue<T>(values: T[]): T {
    return values[Math.floor(Math.random() * values.length)]
}

interface User {
    name: string
    score: number
}

const users: User[] = [
    { name: 'mario', score: 100 },
    { name: 'pitch', score: 100 },
    { name: 'luigi', score: 100 },
    { name: 'bowser', score: 100 }
]

const randomUser = getRandomArrayValue(users)
console.log(randomUser)


interface Guid {
    guid: number
}

function addGuid<T>(obj: T): T & Guid {
    const g = Math.random()

    return { ...obj, guid: g }
}

addGuid(1)