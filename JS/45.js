whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/)
        .map(item => item.toLowerCase()).join("-");
}

spinalCase('This Is Spinal Tap');