// const array1 = ['v', 'c', 'a', 'x','g', 'f', 'd'];

// console.log(array1.sort());


// Bubble sort 

const array1 = [10, 30, 57, 9, 32, 25, 15, 29, 11, 4, 2];
// function bubbleSort(array1){
//     const length  = array1.length;
//     for (let i = 0; i < length; i++){
//         for (let j =0; j < length; j++){
//             if(array1[j] > array1[j+1]){
//                 // swap numbers
//                 let pointer = array1[j];
//                 array1 [j]  = array1 [j+1];
//                 array1[j+1] = pointer;       
//             }
//         }
//     }


// }
// bubbleSort(array1);
// console.log(array1);

// Selection sort

// function selectionSort(array1){
//     const length = array1.length;
//     for(let i= 0; i < length; i++){
//         // set current index as minimum
//         let min = i;
//         let temp = array1[i];
//         for(let j = i+1; j < length; j++){
//           if(array1[j] < array1[min]){
//               //update minimum if current is lower what we had previously
//             min = j;
//              }
//          }
//         array1[i] = array1[min];
//         array1[min] = temp;
//     }
//     return array1;
// }
// selectionSort(array1);
// console.log(array1);


// Insertion sort

function insertionSort(array1){
    const length = array1.length;
    for (let i = 0; i < length; i++){
        if (array1[i] < array1[0]){
            //move number to the first position
            array1.unshift(array1.splice(i,1)[0]);
            }
            else{
                for (let j = 1; j < i; j++){
                    if (array1[i] > array1[j-1] && array1[i] < array1[j])
                    {
                        array1.splice(j,0,array1.splice(i,1)[0]);
                    }
                }
            }

    }

}
insertionSort(array1);
console.log(array1);
