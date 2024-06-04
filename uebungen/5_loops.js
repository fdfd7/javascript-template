let startNumber = 123
while (startNumber != 1) {
    if (startNumber % 2 == 0) {
        startNumber = startNumber / 2
    } else {
        startNumber = startNumber * 3 + 1
    }
    console.log(startNumber)
}
