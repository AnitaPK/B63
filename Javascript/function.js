// function greeting(){
//     console.log("Hello world")
// }

// // call the function / invoke the function 

// greeting()

// function greetWithReturn(){
//     return 'hellO worlD'
// }

// message = greetWithReturn()

// console.log(message)

// greetWirhArrow = ()=> console.log('Hello from arrow')

// greetWirhArrow()

// const grertWithArrowReturn = ()=> 'Hello from arrow without return keyword'

// msg = grertWithArrowReturn()
// console.log(msg)


// greetWithArrReturnKeyword = ()=>{
//     return 'hello from return keyword'
// }

// greetWithArrReturnKeyword()

// m1 = greetWithArrReturnKeyword()
// console.log(m1)

// // simple function define 
// // function invoke/call 
// // simple function with return
// // arrow function define 
// // arrow function invoke
// // arrow function with return

// // parameter    arguments

// function greetStudent(n){
//     console.log('Hello', n)
//     return 'Welcome ' +n
// }

// ajay = greetStudent('Ajay')
// console.log(ajay)
// greetStudent('Harsh')
// greetStudent('Rohan')


// // shallow copy          deep copy    

// function addition(x,y){
//     z = x+y
//     return z 
//     // return x+y
// }

// add = addition(4,5)
// console.log(add)

// addNum = (a,b) => a+b 

// r1 = addNum(10,10)
// console.log(r1)

// sumNum = (a,b)=>{
//     return a+b
// }

// r2 = sumNum(20,20)
// console.log(r2)


// // (function(){
// //     console.log("Im surprise");
// // })();

// // (()=>{    console.log("Arreee kasal boar aahe")})()

result = 1
function factorial(n){
    console.log(n)
  for(let i=n; i>=1; i--){
    console.log(i)		
	result = result * i 	 
  }
  return result
}

console.log("Factorial of 10 ",factorial(10))

function CheckEvenOdd(n){
    if(n % 2 == 0){
        return n + ' is a even number'
    }else{
        return n + ' is odd number'
    }
}

console.log(CheckEvenOdd(90))

function checkLargest(n1,n2,n3){
    if(n1 > n2 && n1>n3){
        return n1 + ' is largest'
    }else if(n2 > n1 && n2>n3){
        return n2 + ' is largest'
    }else{
        return n3 + ' is largest'
    }
}

console.log(checkLargest(23,87,45))

function AreaPerimeterRectangle(l, w){
    area = l*w
    peri = 2*(l+w)
    return "Area is "+ area + " And perimeter is " + peri
}

console.log(AreaPerimeterRectangle(23,63))

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log("GCD of 56 and 98:", gcd(56, 98)); // Output: 14
console.log("GCD of 12 and 15:", gcd(12, 15)); // Output: 3

num = 1234        

// result = 98367
let reverseNum = 0

function reverseNumber(n){
    n = Math.abs(n)
    while(n > 0){
        digit = n % 10
        console.log("digit",digit)
        reverseNum = reverseNum*10 + digit
        console.log("reverse in ite",reverseNum)
        n =Math.floor(n/10)
        console.log('n in iteration',n)
    }
    return reverseNum
}

console.log(reverseNumber(num))