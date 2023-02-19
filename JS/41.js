function sumAll(arr) {
    let maxNumber = Math.max(arr[0], arr[1])
    let minNumber = Math.min(arr[0], arr[1])
    let result = 0
    for (let i = minNumber; i <= maxNumber; i++) {
        result += i
    }
    return result
}
console.log(sumAll([1, 4]));
