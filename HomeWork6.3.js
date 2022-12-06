let num1 = 5,
    num2 = 3;
function numb(num1){
    return function (num2) {
        console.log(num1 + num2);
    }

}

numb(num1)(num2)