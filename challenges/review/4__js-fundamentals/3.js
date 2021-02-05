// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")


let arr1 =[1,2,3]
let arr2 =['a','b','c']

console.log(arr1[0]) // 1
console.log(arr1[arr1.length-1]) // 
// or
console.log(arr1[2]) //3

arr1.unshift(arr2)
console.log(arr1) // [["a","b","c"],1,2,3,4])

console.log(arr1[0][0]) // return a
