let birthYear = 2008
let birthMonth = 1
let birthDay = 8
let currentYear = 2024
let currentMonth = 6
let currentDay = 1

if (currentMonth > birthMonth) {
    console.log(currentYear - birthYear)
} else if ((currentMonth = birthMonth && currentDay >= birthDay)) {
    console.log(currentYear - birthYear)
} else if ((currentMonth = birthMonth && currentDay < birthDay)) {
    console.log(currentYear - birthYear - 1)
} else if (currentMonth < birthMonth) {
    console.log(currentYear - birthYear - 1)
}

if (birthMonth <= 3) {
    console.log("Q1")
} else if (birthMonth <= 6) {
    console.log("Q2")
} else if (birthMonth <= 9) {
    console.log("Q3")
} else if (birthMonth <= 12) {
    console.log("Q4")
}

if (currentYear % 4 == 0 && currentYear >= 1979 && currentYear % 5 == 4) {
    console.log(
        "Dieses Jahr findet sowohl eine Europawahl als auch eine Europameisterschaft statt.",
    )
}

if (currentMonth == birthMonth && currentDay == birthDay) {
    console.log("Du bekommst heute Geschnke, weil du Geburtstag hast.")
}
if (currentMonth == 12 && currentDay == 24) {
    console.log("Du bekommst heute Geschnke, weil Weihnachten ist.")
}
