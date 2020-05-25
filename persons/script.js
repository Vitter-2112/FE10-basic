function showUsersTable(persons = [10]) {
    const sortedPersons = persons.sort(function (a, b) {
        return a.age - b.age;
    });

    let averageAge = 0;
    let minAge = persons[0].age;
    let maxAge = persons[0].age;
    let innerHtmlTableBody = '';
    for (let i = 0; i < persons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + sortedPersons[i].name + '</td><td>' + sortedPersons[i].age + '</td><td>'+ sortedPersons[i].city +'</td>';
        averageAge += + sortedPersons[i].age;
        if (persons[i].age > maxAge)
            maxAge = persons[i].age;
        if (persons[i].age < minAge) 
            minAge = persons[i].age;
    }
    averageAge /= persons.length;

    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;
    document.querySelector('tfoot div.alert').innerHTML = 'Average age: ' + averageAge + ' Min age: ' + minAge + ' Max age: ' + maxAge;
}

let persons = [];

const form$ = document.getElementsByTagName('form')[0];
form$.addEventListener('submit', function(event) {
    event.preventDefault();

    let person = {};
    person.name = document.querySelector('input[name=name]').value;
    person.age = document.querySelector('input[name=age]').value;
    person.city = document.querySelector('input[name=city]').value;
    persons.push(person);

    showUsersTable(persons);
})