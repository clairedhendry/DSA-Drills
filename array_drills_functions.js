const removeSpaces = function(str) {
    return str.replace(/\s/g, '%20')
}

const removeNumbers = function(array) {
    let midPoint = array.length/2;
    let highPoint = array.length -1;
    let lowPoint = 0

    while(lowPoint <= highPoint) {
        if(array[midPoint] === 5) {
        return array.slice(0, array[midPoint - 1])
        }
        if(array[midPoint] > 5) {
        highPoint = midPoint + 1;
        }
        if(array[midPoint] < 5) {
        array.slice(0, array[midPoint])
        lowPoint = midPoint +1
        }
    } return array;
}