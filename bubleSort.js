// function bubleSort(arr: number[]) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// Optimized version
function bubleSort(arr) {
    var noSwap;
    for (var i = arr.length; i > 0; i--) {
        noSwap = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                noSwap = false;
            }
        }
        if (noSwap)
            break;
    }
    return arr;
}
console.log(bubleSort([12, 23, 21, 4, 26, 15]));
