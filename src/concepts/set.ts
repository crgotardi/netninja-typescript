const names = new Set<string>()
names.add('laura')

interface UserSet {
    name: string,
    age: number
}

const user1: UserSet = {
    name: 'Cristiano',
    age: 31
}

const usersSet = new Set<UserSet>()
usersSet.add(user1)

function logUserEmails(users: Set<UserSet>) {
    for (const user of users) {
        console.log(user.name)
    }
}

logUserEmails(usersSet)