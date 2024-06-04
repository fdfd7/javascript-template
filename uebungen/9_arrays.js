export function filterStrings(arr) {
    let newArr = []
    let index = 0
    while (index < arr.length) {
        if (arr[index].startsWith("S") || arr[index].length >= 5) {
            newArr.unshift(arr[index])
        }
        index = index + 1
    }
    return newArr
}
