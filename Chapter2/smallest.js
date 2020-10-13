const smallest = (arr) => {

    let min = arr[0];
    let min_index = 0

    for(let i = min; i <= arr.length; i += 1) 
    {
        if ( arr[i] < min ) {
            min = arr[i]
            min_index = i
        }
    }

    return min_index;
}


exports.smallest = smallest;