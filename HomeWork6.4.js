function interval() {
    let num = 0;
    const summ = function(a, b) {

        num = !num ? a : num + 1;
        console.log(num);

        if(num === b) {
            clearInterval(intervalId);
        }

    };

    const intervalId = setInterval(summ, 1000, 6,  14);

}

interval()


