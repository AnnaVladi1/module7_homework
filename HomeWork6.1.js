function summ() {
    let arr = ['1', 3, 4, null, false, 0, 1, true, 'asdasd', undefined, '1', 3, 4, null, false, 1, true, 0],
        even = 0,
        zero = 0,
        ans,
        odd = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 0) {
            if (i % 2 === 0) {

                even++;
            } else {

                odd++;
            }
        } else {
            zero++;
        }
    }
    ans = `Количество четных элементов - ${even}, нечетных - ${odd}. Количество нулей - ${zero}`;
    console.log(ans);
}

summ();