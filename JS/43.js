function destroyer(arr, ...rest) {
    return arr.filter(item => {
        return !rest.includes(item)
    })


}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
