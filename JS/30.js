function largestOfFour(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i][0]
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > number) {
                number = arr[i][j]
            }

        }
        newArr.push(number)
    }
    console.log(newArr);

    return newArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);