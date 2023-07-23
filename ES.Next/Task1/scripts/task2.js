//#region find max and min of an array using Math.max and Math.min
function minMax(...numbers) {
    return [Math.min(...numbers), Math.max(...numbers)];
}
console.log(minMax(3, 10, 5, 6, 77, 9, 10));
//#endregion

//#region find Max of array using rest parameter
function findMax(...numbers) {
    var max=0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(findMax(3, 10, 5, 6, 77, 9, 10));
//#endregion

//#region find Min of array using rest parameter
function findMin(...numbers) {
    var min=999999999;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
console.log(findMin(3, 10, 5, 6, 77, 9, 10));
//#endregion