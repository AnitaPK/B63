user = {}
console.log(typeof(user))      // object
student = {
    name:'Harsh',
    lName:'Chouhan',
    collegeName:'IPS',
    getFullName:()=>{
        console.log(`${student.name}  ${student.lName}`)
        // console.log(`${this.name}`)
    }
}

console.log(student.name)
console.log(student['collegeName'])

student.age = 20

console.log(student)

// console.log(student.lengt)  undefined

for(let x in student){
    console.log(x, student[x])
}

// for (let v of student){
//     console.log(v)
// }

student.age = 21
console.log(student)

delete student.collegeName
console.log(student)

student.address = {
    ghar:'er345',
    city:'Pune',
    State:'MH',
    pin:234234
}
console.log(student)

console.log(student.address.State)

student.subjects = ['HTML','CSS','JAVASCRIPT']
student.subjects.map((sub)=>console.log(sub))


student.getFullName()


console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

// console.log(student.json())
// console.log(JSON.stringify(student))
strObject = JSON.stringify(student)
console.log(strObject)

let newStudent = JSON.parse(strObject)
console.log(newStudent)