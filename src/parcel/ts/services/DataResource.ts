export class DataResource<T> {
    constructor(private endpoint: string) {}

    async list(): Promise<T[]> {
        const res = await fetch(this.endpoint)
        return res.json()
    }

    async get(id: number): Promise<T> {
        const res = await fetch(`${this.endpoint}/${id}`)
        return res.json()
    }

    async delete(id: number): Promise<Response> {
        const res = await fetch(`${this.endpoint}/${id}`, {
            method: 'DELETE'
        })

        return res
    }

    async save(data: T): Promise<Response> {
        const res = await fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return res
    }
}