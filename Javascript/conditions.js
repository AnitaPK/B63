age = 15
if(age >=18){
    console.log('You are eligible for driving...')
}else{
    console.log('You are not eligible')
}

marks = 130

// grade F marks < 35
// grade C 50 <= marks >=35
// grade B 70 <= marks >50
// grade A 100 <= marks >70

if(marks >=0 && marks<=100){
        if(marks < 35){
            console.log("grade F")
        }else if(marks >=35 && marks <= 50){
            console.log("Grade C")
        }else if(marks >50 && marks <= 70){
            console.log("Grade B")
        }else{
            console.log("Grade A")
        }
}else{
    console.log("invalid marks")
}

n1 = 10
n2 = 20
op = '#'   //'sub'   // 'mul'   //  'div'   
result = 0 
 
switch(op){
    case '+':
        result = n1+n2
        break
    case '-':
        result = n1-n2
        break
    default:
        result = NaN
}
console.log(n1 , op, n2, ' = ', result)  //10 add 20 = 30
//console.log(n1 , op, n2, ' = ', result)  //10 sub 20 = 30
n1 = 13
// i = 1          initialization
// i <= 10        condition 
// i++           increament / decreament

for(i = 1; i <11; i++){
    console.log(n1, ' * ', i, ' = ', n1*i)
}
console.log(i, 'i')

// find odd numbers between 0-20

for(j=0; j<=20; j++){
    if(j % 2 != 0){
        console.log(j)
    }
}


// 13 * 1 = 13
// 13 *  2 = 26
// 13 *  3 = 39
// 13 *  4 = 
// 13 *  5 =
// 13 *  6 = 
// 13 *  7 =
// 13 *  8 = 
// 13 *  9 = 
// 13 * 10 =

a = 1
while(a<=0){
    console.log(n1 * a, '13 * a')
    a++
}

b = 1
do{
    console.log(n1*b, 'N1 * b')
    b++
}while(b<=0)

// find out numbers start with 7 step with 3 up to 30

x = 7
while(x<=30){
    console.log(x, 'x')
    x+=3  //x = x+3
}
for(x=7; x<=30;x+=3){
    console.log(x, 'x in for loop')
}


