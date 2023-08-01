"use strict";
function getLength(param) {
    return param[0];
}
const numberFirst = [1, 2, 3];
console.log(getLength(numberFirst));
const stringFirst = ['a', 'b'];
console.log(getLength(stringFirst));
const user1 = {
    name: 'Ansuman',
    code: 123,
    addressCode: 'street 123',
    status: "active" /* Status.ACTIVE */
};
