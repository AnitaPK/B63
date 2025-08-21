// Sum of Digits
// FizzBuzz Problem
//  Prime Number Checker
// Sum of Odd and Even Numbers
//  Armstrong Number Checker


numSum = 725689

// 7+2+5+6+8+9 
sum = 0
function sumOfDigit(n){
    // console.log(n)
    Math.abs(n)
    while(n>0){
        digit = n%10
        // console.log(digit)
        sum = sum+digit
        // console.log(sum)
        n = Math.floor(n/10)
        // console.log(n)
    }
    return sum
}

console.log(sumOfDigit(numSum))

function FizzBuzzProb(){
    for(i = 1; i<=20;i++){
        if(i%3 == 0 && i%5 == 0){
            console.log('FizzBuzz')
        }else if(i%3==0){
            console.log('Fizz')
        }else if(i%5 == 0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
}
FizzBuzzProb()

function checkPrime(number){
    if(number<=0) return false
    if(number == 1) return true
    if(number == 2) return true
    if(number%2 == 0) return false
    for(i=3; i<=Math.sqrt(number); i++){
        if(number%i == 0){
            return false
        }
    }
      return true
}

// if(n%n == 0 && n%2!=0){
//     console.log('Prime')
// }else{
//     console.log("Not prime")
// }
console.log("1",checkPrime(1))
console.log("0",checkPrime(1))
console.log("2",checkPrime(1))
console.log("19",checkPrime(19))
console.log("20",checkPrime(20))
console.log("1753",checkPrime(1753))
console.log("negetive number",checkPrime(-53))

// 1-100 
let evenNumSum, oddNumSum =0 

for(i=1; i<=100;i++){
    if(i%2==0){
        evenNumSum = evenNumSum+i
    }else{
        oddNumSum = oddNumSum+i
    }
}
153 = 1^2+5^2+3^2
sum = 0
while(xyz>0){
    digit = xyz%2
    sum = sum+ digit*2
    xyz = xyz/10
}
if(xyz == sum){
    console.log("Its Armstrong")
}else{
    console.log("Not Armstrong")
}