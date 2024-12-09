import { appendFileSync } from 'fs'

interface Payment {
    id: number
    amount: number
    to: number
    notes: string
}

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[]

class CSVWriter {
    constructor(private columns: PaymentColumns) {
        this.csv = this.columns.join(',') + '\n'
    }

    private csv: string

    save(filename: string): void {
        appendFileSync(filename, this.csv)

        this.csv = '\n'
    }

    addRows(values: Payment[]) {
        let rows = values.map(value => this.formatRow(value))

        this.csv += rows.join('\n')
    }

    private formatRow(p: Payment): string {
        return this.columns.map(column => {
            return p[column]
        }).join(',')
    }
}

const w = new CSVWriter(['id', 'amount', 'to', 'notes'])

w.addRows([
    {
        id: 1,
        amount: 100,
        to: 123456789,
        notes: 'payment'
    },
    {
        id: 2,
        amount: 200,
        to: 987654321,
        notes: 'payment'
    }
])

w.save('example.csv')