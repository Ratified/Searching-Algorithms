function binary_search(array, target){
    let start = 0;
    let end = array.length - 1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(array[mid] === target){
            return mid;
        }

        else if(array[mid] < target){
            start = mid + 1;
        }

        else{
            end = mid - 1;
        }
    }

    return -1;
}

const numbers = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const target = 22;
var index = binary_search(numbers, target);

if (index !== -1) {
    console.log(`Target value ${target} found at index ${index}`);
  } else {
    console.log(`Target value ${target} not found in the list`);
  }