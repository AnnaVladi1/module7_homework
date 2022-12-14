class ElectricalAppliance {

    constructor(props) {
        for (let key in props) {
            this[key] = props[key];
        }
        this.state = false;
    }

    togglePower = function (status) {
        this.state = status;
    }
}


class Items {
    constructor(props) {
        for (let key in props) {
            this[key] = new ElectricalAppliance(props[key]);
        }

    }
}


class Calculate {
    constructor(items) {
        this.items = items;
        this.total = 0;
    }

    toggleOn = function () {
        Object.keys(this.items).map(key => {
            this.items[key].togglePower(this.items[key].name !== 'kettle')
        })
    }
    powerSumm = () => {
        Object.keys(this.items).map(key => {
            this.total += this.items[key].state ? this.items[key].power : 0;
        })

        console.log(`Потребляемая мощность всех включенных приборов - ${this.total}`);
    }


}

let itemsCollection = new Items([
    {
        name: 'toaster',
        power: 10,
        color: 'red',
        bread: 'regular',
        cookBread: function () {
            setTimeout(() => {
                this.bread = 'toasted';
            }, 5000)
        }
    },
    {
        name: 'kettle',
        power: 20,
        color: 'white',
    },
    {
        name: 'computer',
        power: 450
    }
])

let ans = new Calculate(itemsCollection);
ans.toggleOn();
ans.powerSumm();