let toDos = [];
function mapToDo() {
  document.querySelector("#mapTODO").innerHTML = toDos
    .map(
      (td, i) => `
                                                <p><span>${td}</span>
                                                <button class='btn btn-danger' onclick="deleteToDo('${td}')">Delete</button>
                                                </p>
    `
    )
    .join("");
}

function submitToDO() {
  toDoValue = document.querySelector("#todo").value;
  toDos.push(toDoValue);
  mapToDo();
  document.querySelector("#todo").value = "";
}

function ResetToDO() {
    toDos = []
    mapToDo();

}
function deleteToDo(todo){
    console.log('**********',todo)
    let index1 = toDos.indexOf(todo)
    if(index1 == -1){
        alert('Product not found')
    }else{
        toDos.splice(index1, 1)
        alert('ToDo deleted successfully')
        mapToDo()   
    }
}

// Student Marks Calculator

mathsInput = document.getElementById('maths')
englishInput = document.getElementById('english')
marathiInput = document.getElementById('marathi')
scienceInput = document.getElementById('science')
hindiInput = document.getElementById('hindi')
avgInput = document.querySelector('#avgMarks')
maxInput = document.querySelector('#maxMarks')
minInput = document.querySelector('#minMarks')
marks = []


function submitMartks(){
  maths =Number(mathsInput.value)
  marks.push(maths)
  english =parseInt(englishInput.value)
  marks.push(english)
  marathi = Number(marathiInput.value)
  marks.push(marathi)
  science = Number(scienceInput.value)
  marks.push(science)
  hindi = Number(hindiInput.value)
  marks.push(hindi)
  console.log(marks)
  avg = marks.reduce((sum,mark)=>sum+mark,0) / marks.length
  console.log(avg)
  avgInput.innerHTML = avg

  sortedMarks = marks.sort((a, b) => a - b)
  maxInput.innerHTML = sortedMarks[sortedMarks.length - 1]
  minInput.innerHTML = sortedMarks[0]
}

// Search in Array

cars = ['Audi', 'BMW','Hondai', 'Mahindra','Tesla','Tata']
inputSearchElmt = document.querySelector('#inputSearch')
function Search(){
      inputWord = inputSearchElmt.value
      result = cars.find((car)=>car.toLowerCase() == inputWord.toLowerCase())
      console.log(result)
      if(result){
        document.querySelector('#resultSearch').innerHTML = result
      }else{
        document.querySelector('#resultSearch').innerHTML = 'Not found'

      }
    }

num1Elmt = document.querySelector('#num1')
let numberArray = []
  function AddNumbers(){
    numberArray.push(Number(num1Elmt.value))
    num1Elmt.value = ''
  }

  function clearArray(){
    console.log(numberArray)
    numberArray = []
  }
// evenArray = []
function ShowEvenNumbers(){
    evenNumbers = numberArray.filter((n)=> n%2 ==0)
    document.querySelector('#EvanNumbers').innerHTML = evenNumbers
}