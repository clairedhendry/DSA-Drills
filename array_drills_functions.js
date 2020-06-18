const removeSpaces = function(str) {
    return str.replace(/\s/g, '%20')
}

//trying to figure out logarithmic solution
//should cut array in half and evaluate each time
const removeNumbers = function(array) {
    let midPoint = array.length/2;
    let highPoint = array.length -1;
    let lowPoint = 0;
    let currentValues;

    while(lowPoint <= highPoint) {
        // currentValues = Math.floor((lowPoint + highPoint) / 2);
        if(array[midPoint] === 5) {
        return  array.slice(0, array[midPoint - 1]);
        }
        else if(array[midPoint] > 5) {
        highPoint = midPoint + 1;
        }
        else if(array[midPoint] < 5) {
        currentValues = array.slice(0, array[midPoint]);
        lowPoint = midPoint + 1;
        } 
        else {
            return currentValues;
        }
    } 
}

//for loop solution - slow if array is large!
const removeTheNumbers = function(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 5) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

let arr = [4, 6, -3, 5, -2, 1]

const findLargestSum = function(array) {
    let currentSum = 0;
    let largestSum = 0;
    for(i = 0; i < array.length; i++) {
        currentSum = currentSum + array[i];
        if(currentSum > largestSum) {
            largestSum = currentSum
        } 
        }
    return largestSum;
}