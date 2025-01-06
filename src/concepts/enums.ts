enum Priority {
    Lowest = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Urgent = 4
}

interface Ticket {
    description: string,
    priority: Priority
}

function addTicket(ticket: Ticket) {
    console.log(ticket.priority)
}

addTicket({ description: 'fix Computer', priority: Priority.Lowest })