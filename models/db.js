const faker = require('faker');


const address = {
    street_address: faker.address.streetAddress(),
    secondary_address: faker.address.secondaryAddress(),
    city:faker.address.city(),
    number:faker.phone.phoneNumber(),
    state : faker.address.state(),

};

module.exports =address;

