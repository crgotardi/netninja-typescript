// interface
interface Author {
    name: string,
    avatar: string
}
const author: Author = {
    name: 'Mario',
    avatar: 'https://picsum.photos/200'
}
function createAuthor(author: Author) {
    console.log(author.avatar)
}
const authors: Author[] = []
authors.push(author)

// extending interface
interface Writer extends Author {
    books: string[]
}
const writer: Writer = {
    avatar: 'https://picsum.photos/200',
    name: 'Mario',
    books: ['book1', 'book2']
}

// type guards
interface Pokemon {
    name: string,
    evolution: string
    type: 'pokemon'
}
interface Digimon {
    name: string,
    digievolution: string,
    type: 'digimon'
}
function getPublisher(monster: Pokemon | Digimon) {
    if (monster.type === 'pokemon') {
        return 'nintendo'
    } else {
        return 'sony'
    }
}