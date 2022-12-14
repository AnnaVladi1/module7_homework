function ElectricalAppliance(name, state, power) {
    this.name = name;
    this.state = state;
    this.power = power;
}

ElectricalAppliance.prototype.togglePower = function (status) {
    this.state = status;
}

let items = {
    toaster: new ElectricalAppliance('toaster', false, 10),
    kettle: new ElectricalAppliance('kettle', false, 20),
    computer: new ElectricalAppliance('computer', false, 450)
}


items.toaster.color = 'red';
items.toaster.bread = 'regular'
items.toaster.cookBread = function () {
    setTimeout(() => {
        this.bread = 'toasted'
    }, 5000)
}


items.kettle.color = 'white';


function calculate(items) {
    let total = 0;

    for (let key in items) {
        items[key].togglePower(key !== 'kettle')
    }

    function powerSumm() {
        Object.keys(items).map(key => {
            total += items[key].state ? items[key].power : 0;
        })
    }

    powerSumm();

    return `Потребляемая мощность всех включенных приборов - ${total}`;
}


let summ = calculate(items);

console.log(summ);