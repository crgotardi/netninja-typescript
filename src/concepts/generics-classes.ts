class DataCollection<T> {
    constructor(private data: T[]) {}

    loadOne(): T {
        const i = Math.floor(Math.random() * this.data.length)
        return this.data[i]
    }

    loadAll(): T[] {
        return this.data
    }

    add(val: T): T[] {
        this.data.push(val)
        return this.data
    }
}
  
interface User {
    name: string,
    score: number
}

const usersData = new DataCollection<User>([
    { name: 'Cris', score: 100 },
    { name: 'Laura', score: 200 },
    { name: 'Jade', score: 200 },
])

usersData.add({ name: 'Izzy', score: 401 })
usersData.loadAll()