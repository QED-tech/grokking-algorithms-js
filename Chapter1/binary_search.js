let list = [1, 2 , 3 , 4 , 5 , 6 , 7, 9 , 33 , 55 , 77 , 78, 79, 80, 81];

const binarySearch = (list, num) => {
    let low = 0;
    let high = list.length - 1;
    

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];

       
        if(guess == num) {
            return mid
        }

       
        if(guess > num) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return 'value undefined';

}


console.log(binarySearch(list, 77))