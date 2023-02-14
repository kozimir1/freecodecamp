function titleCase(str) {
    const newArr = str.split(" ");
    const updatedArr = [];
    for (let st in newArr) {
        updatedArr[st] = newArr[st][0].toUpperCase() + newArr[st].slice(1).toLowerCase();
    }
    console.log(updatedArr.join(" "));
    return updatedArr.join(" ");

}
titleCase("I'm a little tea pot");