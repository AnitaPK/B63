inputElemt = document.querySelector('#inputString')
resultElemt = document.querySelector('#result')

function capitalise(){
    inputText = inputElemt.value
    resultElemt.textContent =   inputText.toUpperCase()
}

function convertSmallCase(){
    inputText = inputElemt.value

    resultElemt.textContent = inputText.toLowerCase()
}

function CountVowels(){
    vowels = 'aeiouAEIOU'
    countVowel = 0
    inputText = inputElemt.value
    len = inputText.length
    for(i=0;i<len;i++){
        if(vowels.includes(inputText.charAt(i))){
            countVowel++
            console.log(inputText.charAt(i))
        }
    }
    resultElemt.textContent = countVowel
}