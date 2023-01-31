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
// function bubleSort(arr: number[]) {
//   let noSwap: boolean;
//   for (let i = arr.length; i > 0; i--) {
//     noSwap = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//         noSwap = false;
//       }
//     }
//     if (noSwap) break;
//   }
//   return arr;
// }

// console.log(bubleSort([12, 23, 21, 4, 26, 15]));

// Selection sort
// function selectionSort(arr: number[]) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     // Swap if i and lowest are different
//     if (i !== lowest) swap(arr, i, lowest);
//   }
//   return arr;
// }

// console.log(selectionSort([12, 23, 21, 4, 26, 15]));

//Insertion sort
function insertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let index = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > currentVal) {
        arr[j + 1] = arr[j];
        index = j;
      }
    }
    arr[index] = currentVal;
  }
  return arr;
}

console.log(insertionSort([12, 23, 21, 4, 26, 15]));
