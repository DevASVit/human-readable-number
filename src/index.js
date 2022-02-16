module.exports = function toReadable(number) {
    let numberWord;

    const dg = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    if (number >= 0 && number <= 9) {
        return (numberWord = dg[number]);
    }

    const numberArr = number.toString().split("");
    const tn = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    if (number >= 10 && number <= 19) {
        return (numberWord = tn[numberArr[1]]);
    }

    const tw = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number >= 20 && number <= 99) {
        if (number % 10 === 0) {
            return (numberWord = tw[numberArr[0] - 2]);
        } else {
            return (numberWord = `${tw[numberArr[0] - 2]} ${dg[numberArr[1]]}`);
        }
    }

    if (number >= 100 && number <= 999) {
        if (number % 100 === 0) {
            return (numberWord = `${dg[numberArr[0]]} hundred`);
        } else {
            const numberPart = +numberArr.slice(1, 3).join("");

            if (numberPart >= 1 && numberPart <= 9) {
                return (numberWord = `${dg[numberArr[0]]} hundred ${
                    dg[numberPart]
                }`);
            }

            if (numberPart >= 10 && numberPart <= 19) {
                return (numberWord = `${dg[numberArr[0]]} hundred ${
                    tn[numberArr[2]]
                }`);
            }

            if (numberPart >= 20 && numberPart <= 99) {
                if (numberPart % 10 === 0) {
                    return (numberWord = `${dg[numberArr[0]]} hundred ${
                        tw[numberArr[1] - 2]
                    }`);
                } else {
                    return (numberWord = `${dg[numberArr[0]]} hundred ${
                        tw[numberArr[1] - 2]
                    } ${dg[numberArr[2]]}`);
                }
            }
        }
    }
};
