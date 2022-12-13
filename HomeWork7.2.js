let string = '6479',
    string2 = 'test',
    obj = {
        'test': 1,
        'string2': 'ok'
    };

function checkObj(string, obj) {
    return obj[string] ? true : false;
}

let ans = checkObj(string2,obj);

console.log(ans);