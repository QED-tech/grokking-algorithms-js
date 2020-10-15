
const quickSort = (arr) => {
    if(arr.length < 2) {
        return arr
    }

    const pivot = arr[0] 
    let great = []
    let less = []

    for(let i = 1; i < arr.length; i += 1) {
        if(arr[i] <= pivot) { 
            less.push(arr[i])
        } else {
            great.push(arr[i])
        }
    }


    return quickSort(less).concat(pivot, quickSort(great))
}


let arr = [2, 5 ,3 , 5 , 7, 9, 3, 2, 1, 33, 25 , 66, 77, 43];



console.log(quickSort(arr))