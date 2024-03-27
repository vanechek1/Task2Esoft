function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let copy = Array.isArray(obj) ? [] : {};
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}
let originalObj = {
    a: 1,
    b: {
        c: 2
    },
    d: [3, 4]
};

let copiedObj = deepCopy(originalObj);

console.log(originalObj); // Оригинальный объект
console.log(copiedObj); // Глубокая копия объекта