function sayLouder(text){
    text.toUpperCase();
    return text;
}


console.log(sayLouder("It works"));

// IT WORKS

function getPositiveNumbers(arr){
    positiveNumArr = arr.filter((num)=> num > 0)
    return positiveNumArr;
}
console.log(getPositiveNumbers([-1, 2, -3, 4, 5])); 
// [2, 4, 5]

function getPassingTests(data){
   return data.filter((stud)=> stud.grade >= 10)
}

students = [{id:1,grade:5},{id:2,grade:25},{id:3,grade:20},{id:4,grade:10}]
console.log(getPassingTests(students))
