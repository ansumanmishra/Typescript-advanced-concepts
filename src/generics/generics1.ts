function getUser(param: object) {
    return {
        uid: 5,
        ...param
    }
}

const user = getUser({
    name: 'Ansuman'
});

// user.name; // Does not retain the type. This is where generics comes into picture

function getUser1<T extends object>(param: T) {
    return {
        uid: 5,
        ...param
    }
}
// T extends object ensures we only pass object as generics.
const userNew = getUser1({
    name: 'Ansuman'
});

userNew.name // Retains the types
