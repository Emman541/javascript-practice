// function getLastValue(array) {
//   const lastIndex = array.length - 1
//   return array[lastIndex]
// }
// console.log(getLastValue([1, 20, 22, 24, 5]));
// console.log(getLastValue(['hi', 'hello', 'hey']));


// const array = [1, 2, 3, 4, 5]
// array[lastIndex] = firstvalue
// console.log(lastvalue);
// console.log(firstValue);
// console.log(array);
// console.log(array.length - 1);
// console.log(array[0]);
// console.log(array[lastIndex]);

// function arraySwap(array) {
//   const  firstValue = array[0]
//   const lastIndex = array.length - 1
//   const lastvalue = array[lastIndex]
//   array[0] = lastvalue
//   array[lastIndex] = firstValue
//   return array;
// }

// console.log(arraySwap([1, 20, 22, 24, 5]));
// console.log(['hi', 'hello', 'hey']);

// for (let index = 0; index <= 10; index = index + 2) {
//   console.log(index);
//   // numByTwo = 
  
// }
// for (let index = 5; index >= 0; index--) {
//   console.log(index);
//   // numByTwo = 
  
// }

// const numb = [1, 2, 3];
// let increaseNum = [];

// for (let index = 0; index < numb.length; index++) {
//   const listNum = numb[index];
//   // console.log(listNum);
//   increaseNum.push(listNum) + 1;
// }
// console.log(increaseNum);

// function addOne(array) {
//   const addNumber = [];
//   for (let i = 0; i < array.length; i++) {
//     addNumber.push(array[i] + 1)
    
//   }
//   return addNumber; 
// }


// console.log(addOne([1, 2, 3]));


// function addNum(array, num) {
//   const newArray = [];
//   for (let index = 0; index < array.length; index++) {
//     newArray.push(array[index] + num)
    
//   }
//   return newArray;
// }

// console.log(addNum([1, 2, 3], 2));


// function addArrrays(array1,  array2) {
//   const newArray = [];
//   for (let index = 0; index < array1.length; index++) {
//     newArray.push(array1[index] + array2[index])
    
//   }
//   return newArray;
// }
// console.log(addArrrays([1, 2, 3], [1, 2, 3]));


// function countPositive(nums) {
//   let result = 0;
//   for (let index = 0; index < nums.length; index++) {
//     if (nums[index] > 0) {
//       result++;
//     }
    
//   }
//    return result;
// }
// console.log(countPositive([1, -3, 5]));


// function minMax(nums) {
//   const result = {
//     min: nums[0],
//     max: nums[0]
//   };
//   console.log(result.min);
//   console.log(result.max);
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     console.log(element);
//     if (element < result.min) {
//       result.min = element;
//       console.log(element);
//     }
//     if (element > result.max) {
//       result.max = element;
//     }
//     else{
//       result.min = null
      
//     }
//   }
//   return result
// }

// console.log(minMax([]));

// const array = ['hello', 'world', 'search', 'good']
// let dindex = -1

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   if (element === 'search') {
//     console.log(index);
//   }
// }
// const array2 = ['not', 'found']
// for (let index = 0; index < array.length; index++) {
//   const element2 = array2[index];
//   if (element2 === 'search') {
//     console.log(dindex);
//   }
// }


// const add = function add() {
//   return 2 + 3
// }
// console.log(add);

let quantity = 0
document.querySelector('.add-to-cart-button').addEventListener('click', () =>{
  console.log(document.querySelectorAll('.option'));
  
  // quantity = quantity +  
})
