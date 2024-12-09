// type
type RGB = [number, number, number]
const color: RGB = [255, 255, 255]

// function signature
type Add = (a: number, b: number) => number
const add: Add = (a, b) => a + b

// extending types
type RGBA = [...RGB, number]
const rgba: RGBA = [255, 255, 255, 255]

type food = {
    name: string
}
type burger = food & {
    price: number
}
const burger: burger = {
    name: 'burger',
    price: 10
}