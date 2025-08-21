userName = 'Harsh'
employee = "Rohan"
description = `dfghjk fghjk
fghjk 
 fghjkl;'
`


console.log(employee.length)
console.log(employee[1])
console.log(employee.charAt(12))

console.log(userName.toUpperCase())
console.log(userName.toLowerCase())


emptyStr = '                  '
console.log(emptyStr.length)
console.log(emptyStr.trim().length)

fruit = '      Apple               '
console.log(fruit.length)
console.log(fruit.trim().length)
console.log(fruit.trimStart().length)
console.log(fruit.trimEnd().length)


fName = 'Ajay'
lName = 'Wankhede'
fullName = fName + ' ' + lName
console.log(fullName) 

console.log(fName.concat(' ',lName))

full_Name = `${fName} ${lName}`
console.log(full_Name)

// Searching Strings
// .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith(). 

thought = 'Every day is a new chance to do something good Day!!!'

console.log(thought.indexOf('day'))
console.log(thought.lastIndexOf('do'))

console.log(thought.indexOf('qwe')) //return -1

console.log(thought.includes('day'))
console.log(thought.startsWith('Every'))
console.log(thought.endsWith('!'))

// Replacing Substrings
// .replace() and .replaceAll().

console.log(thought.replace('new','GOOD'))
console.log(thought)

console.log(thought.replaceAll(/day/gi, 'DAY'))
// regular expression 

// regExp 

// .slice(), .substring(), .substr()

greet = 'Welcome Wisdom Sprouts'

console.log(greet.slice(8,15))
console.log(greet.substring(0,7))

fruits = 'Apple Banana Mango'

console.log(fruits.split(' '))