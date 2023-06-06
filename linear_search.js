function Linear_Search(array, target){
    for(i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

/* Implementation */
const numbers = [20, 18, 32, 64, 16, 256];
const target = 32;
var index = Linear_Search(numbers, target);
if(index >= 0){
    console.log("Target found at index " + index);
}
else{
    console.log("Target not found");
}