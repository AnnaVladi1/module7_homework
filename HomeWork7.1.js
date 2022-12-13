let obj = {};
obj.name = '3546';
obj.name2 = 'frsd';
obj.name3 = '252';
obj.name4 = 'aBfd';
obj.name5 = '3847';


function checkObj(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(`ключ - ${key}, значение - ${obj[key]}`);
        }
    }
}

checkObj(obj);

