let obj = {};
obj.name = 'test1';
obj.name2 = 'test2';
obj.name3 = 'test3';
obj.name4 = 'test4';
obj.name5 = 'test5';


function checkObj(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(`Ключ - ${key}, значение - ${obj[key]}`);
        }
    }
}

checkObj(obj);

