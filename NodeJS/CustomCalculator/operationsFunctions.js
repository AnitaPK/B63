function addition(a,b){
    console.log(a+b, "in module")
    return a+b

}
function subtraction(a,b){
    console.log(a-b,"in module")
    return a-b
}
function division(a,b){
    if(b==0){
        return "can not divided by ZERO"
    }else{
        return a/b
    }
}
module.exports =  {addition, subtraction, division}