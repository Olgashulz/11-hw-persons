const persons = [];
let inputData = prompt('Enter person data (id, firstName, lastName, age) separate by ","');
while (inputData) {
    let arr = inputData.split(',');
    if (arr.length < 4) {
        alert("You did not enter all the data, please try again.");
    } else if (persons.findIndex(p => p.id === arr[0]) >= 0) {
        alert("A person with this id already exists, check and enter the correct data.");
    } else if (Number.isNaN(Number(arr[3]))) {
        alert("You entered incorrect age.");
    } else {
        persons.push(new Person(arr[0].trim(), arr[1].trim(), arr[2].trim(), Number(arr[3])));
    }
    inputData = prompt('Enter person data (id, firstName, lastName, age) separate by ","');
}

printPersons(persons);
printStats(persons);

function printPersons(persons) {
    persons.forEach((p, i) => console.log(`${i + 1}) ${p.fullName()}`));
}

function printStats(persons) {
    let arrAges = persons.map(i => i.age);
    const average = arrAges.reduce((acc, a) => acc + a) / arrAges.length;
    console.log(`Min age = ${Math.min(...arrAges)}; Max age = ${Math.max(...arrAges)}; Avg age = ${average.toFixed(1)};`);
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `id:${this.id} name:${this.firstName} lastName:${this.lastName} age:${this.age}`;
    };
}
