resultLeapYaerElmt =  document.querySelector("#resultLeapYaer")
yearInputElmt = document.querySelector('#year')
displayHideElmt = document.querySelector('.customDisplayHide')

function checkLeapYear() {
  resultLeapYaerElmt.style.display = "block";
  getYear = yearInputElmt.value

    if(getYear % 4 == 0 && getYear % 100 != 0){
    resultLeapYaerElmt.textContent = getYear + "Year is leap year"
}else if(getYear % 400 == 0){
    resultLeapYaerElmt.textContent = getYear + "Year is leap year"
}else{
    resultLeapYaerElmt.textContent = getYear + "Year is NOT a leap year"
}
}


function checkLargest(){
  document.querySelector('#CheckLarget').style.display = "block";
  document.querySelector('#CheckLarget').innerHTML = 'ertyui'
}
