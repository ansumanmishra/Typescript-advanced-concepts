// This is a trick to define enums. This will not create corresponding JS snippets if we add const
const enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}

interface User<T, Y> {
    name: string,
    code: T,
    addressCode: Y,
    status: Status
}

function getLength<T>(param: T[]): T {
    return param[0];
}

const numberFirst = [1, 2, 3];
console.log(getLength<number>(numberFirst));

const stringFirst = ['a', 'b'];
console.log(getLength(stringFirst));

const user1: User<number, string> = {
    name: 'Ansuman',
    code: 123,
    addressCode: 'street 123',
    status: Status.ACTIVE
}