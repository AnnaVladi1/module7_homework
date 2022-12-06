let ans = prompt('Введите любое число до 1000');


function numb(ans) {
    if (ans === '1' || ans === '0') {
        return 'Не является простым числом';
    } else if (ans >= 1000) {
        return 'Введены неверные данные';
    }
    for (let i = 2; i < ans; i++) {
        if (ans % i === 0) {
            return `${ans} - Составное число`;
        }
    }
    return `${ans} - Простое число`;


}

let a = numb(ans);

console.log(a);