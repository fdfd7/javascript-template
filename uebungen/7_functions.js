function findYear(startYear) {
    let year = startYear
    while (year < startYear + 20) {
        if (year % 4 == 0 && year >= 1979 && year % 5 == 4) {
            return year
        } else year = year + 1
    }
}
function thirdCollatzNumber(number) {
    let round = 0
    while (round < 3) {
        if (round == 2) {
            return number
        } else if (number % 2 == 0) {
            number = number / 2
        } else {
            number = number * 3 + 1
        }
        round = round + 1
    }
}

export function getMagicNumber(startYear, age) {
    age = age + findYear(startYear) - startYear
    return thirdCollatzNumber(age)
}
console.log(getMagicNumber(2024, 30))
console.log(getMagicNumber(2018, 18))
console.log(getMagicNumber(2035, 5))
