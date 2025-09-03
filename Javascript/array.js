// arrayDemo = []
// console.log(typeof(arrayDemo))
// console.log(arrayDemo)

// fruits = ['Apple', 'Mango','Banana']
// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits[fruits.length - 1])


// mixedArray = ['Shrihari', 20, 'Pune', 'TCS']
// mixedArray[3]

// fruits.push('Cherry')
// console.log(fruits)

// fruits.unshift('Orange')
// console.log(fruits)

// fruits[3] = 'Watermelon'
// console.log(fruits)

// fruits[fruits.length] = 'Grapes'
// console.log(fruits)

// // fruits[15] = 'Pinneapple'
// // console.log(fruits)

// // fruits.pop()
// console.log(fruits)

// // fruits.shift()
// console.log(fruits)

// // slice     splice 

// console.log(fruits.slice(3,5))
// console.log(fruits)


// fruits.splice(3, 0, 'Blueberry')
// console.log(fruits)

// fruits.splice(5, 2, 'Papaya','Kiwi','Peru')
// console.log(fruits)

// len = fruits.length
// for(i=0; i<len; i++){
//     // console.log("I like to eat ", fruits[i])
//     console.log(`i like to eat ${fruits[i]}`)
// }

// numArray = [1,2,3,4,5,6,7,8,9,10]
// numArray[0]

// lenNumArray = numArray.length
// for (i=0;i<lenNumArray;i++){
//     console.log(numArray[i] * numArray[i]) //numArray[i]**2
// }

// for(z=0;z<lenNumArray;z++){
//     if(numArray[z] % 2 == 0){
//         console.log('Even num', numArray[z])
//     }
// }

// evenArray = []

// for(x=0;x<lenNumArray; x++){
//     if(numArray[x] % 2 == 0){
//         evenArray.push(numArray[x])
//     }
// }
// console.log(evenArray)
// // create array of odd numbers 

// oddNumber = []
// for(i=0;i<lenNumArray;i++){
//     if(numArray[i]%2 != 0){
//         oddNumber.push(numArray[i])
//     }
// }
// console.log(oddNumber)

// //  Calculate the Sum of Array Elements
// numArray1 = [23,73,91,45,61]
// sumOfArray = 0
// for(i=0;i<numArray1.length;i++){
//    sumOfArray = sumOfArray + numArray[i]
// }
// console.log(sumOfArray)
// // Find the Maximum Element in an Array
// maxNum = 0
// for(i=0;i<numArray1.length;i++){
//     if(numArray1[i] > maxNum){
//         maxNum = numArray1[i]
//     }}

// iteNo   i   numArray[i]    condition             maxNum
// 1       0     23             true                 23 
// 2       1     73             true                 73
// 3       2     91             true                 91
// 4       3     45          45>91False              91
// 5       4     61          61>91false              91
// 6       5     

// Create a program to reverse an array manually.
// Write a program to find the second-largest number in an array.
// Create a function to merge two arrays without duplicates.
// Write a program to remove all duplicate elements in an array.
// Write a function that finds the intersection of two arrays.

// // for in              for of 
// numArray1 = [23,73,91,45,61]
// for( x in numArray1){
//     console.log(x)
//     console.log(numArray1[x])
// }

// for(y of numArray1){
//     console.log(y)
// }

// // map()
// console.log("************")

// numArray1.map((element,index)=>console.log(element, index))
// console.log("************")
// numArray1.map((elmt, i)=>{
//     // return 
//     console.log(elmt,i)
// })
// fruits = ['Apple', 'Mango','Banana']

// // fruits.map(function(v,i){console.log(v,i)})
// fruits.map((e)=>console.log('I like to eat',e ))

// products = []

// products.map((product,i)=>)

// brands.map((brand,index)=>)
// console.log("****** foreach *****")
// numArray1.forEach((element,i) => {
//     console.log(element,i)
// });
// console.log("****** square of numbers *****")

// numArray1.map((num)=>console.log(num*num))
// numArray1.map((num)=>{
//     console.log('Square of', num ,' is ', num**2)
//     console.log('Addition of 2 ', num, ' is ', num+num)
// })


let items = ["Pen", "Book", "Eraser"];

indexBook =items.indexOf('Book')

console.log(indexBook)

indexOFElmt = items.indexOf('qwertyu')
console.log(indexOFElmt)

console.log(items.includes('Eraser'))

console.log(items.includes('oiuytre'))

let colors = ["Red", "Blue", "Green", "Yellow"];

let subColors = colors.slice(1,4)
console.log(subColors)

colors.splice(1, 0, 'Orange', 'Purple')
console.log(colors)
colors.splice(1,2)
console.log(colors)

matrix = [[1,2,3],[4,5,6],[7,8,9]]

for(i=0; i < matrix.length; i++){
    for(j=0; j<=i;j++){
        console.log(matrix[i][j])
    }
}

numArr = [2,4,3,65,98,34,56,43,65,76]

evenArray = numArr.filter((num)=>num % 2 == 0)
console.log(evenArray)

oddNumber = numArr.filter((num)=>{
    return num % 2!= 0
})
console.log(oddNumber)

console.log(items.find((p)=> p == 'Book'))

findP = 'bOOK'
console.log(typeof(findP),'******')
console.log(items.find((p)=>p.toLowerCase() == findP.toLowerCase()))

let sum
sum = numArr.reduce((sum, num)=> sum+num, 0)
console.log(sum)

eNumbers = numArr.some((n)=>n%2==0)
console.log(eNumbers)

str111 = items.every((item)=> typeof(item) == 'string')
console.log(str111)
mArr = [1,'rtyu',[1,2,3]]

console.log(mArr.every((v)=> typeof(v) == 'string'))

console.log(numArr.sort(), 'Number array')
console.log(colors.sort(), 'string array')

n1 = [5,7,3]
n2 = [9,3,6]
let n3 = new Set(n1.concat(n2).sort())
console.log(n3)