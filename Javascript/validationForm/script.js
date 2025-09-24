const fullNameElmt = document.querySelector("#fullName")
const emailAddressElmt = document.querySelector("#emailAddress")
const mobileNumberElmt = document.querySelector("#mobileNumber")
const maleElmt = document.querySelector("#male")
const femaleElmt = document.querySelector("#female")
const passwordElmt = document.querySelector("#password")
const confirmPasswordElmt = document.querySelector("#confirmPassword")


    function formValidation(){
        success = false

        fullName = fullNameElmt.value 
        regex = /\d/;
        console.log(!regex.test(fullName.trim()))
        if(fullName.trim().length == 0){
            document.querySelector("#errorName").classList.remove('d-none')
            document.querySelector("#errorName").innerHTML = "Should not be empty"; 
        }else if(fullName.trim().length < 2){
            document.querySelector("#errorName").classList.remove('d-none')
            document.querySelector("#errorName").innerHTML = "Name must be at least 2 characters"; 
        }else if(regex.test(fullName.trim())){
            console.log("8888", regex.test(fullName.trim()))
            document.querySelector("#errorName").classList.remove('d-none')
            document.querySelector("#errorName").innerHTML = "must not be containt digit"; 
        }else{
            success = true
        }


        if(success){
            document.querySelector("#submitMSG").classList.remove('d-none')
            document.querySelector("#submitMSG").innerHTML = "Form Submitted";
        }
}

