const faker = require('faker');
const fs = require('fs');
var str = "";

for (let i = 0; i < 200; i++)
    str += i + ',' + i + ',' +  faker.name.jobType() + ',' + faker.name.title() + '\n';

fs.writeFile('C:/Users/Lucas Buttow/Documents/artillery-test/data.csv', str, (error) => {
    if (error) {
        return console.log(error)
    }
    console.log('The file was saved'); 
});