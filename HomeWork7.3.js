function createObject() {
    return Object.create(null)
}

let a = createObject();

console.log(Object.getPrototypeOf(a));