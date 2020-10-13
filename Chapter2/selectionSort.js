let smallest = require('./smallest')

const selectionSort = (arr) => {

    let newArr = [];

    for (let i = 0; i <= arr.length; i += 1) {

        let small = smallest.smallest(arr)
        newArr.push(arr[small])
        arr.splice(small, 1)
    
    }

    
    return newArr.concat(arr)
}



let result = selectionSort([3, 4, 5, 2, 1, -8, 9, 1])

console.log(result)