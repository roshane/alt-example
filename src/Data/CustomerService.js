import faker from 'faker';
import _ from 'lodash';

class Customer {

    constructor(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
}


export default{
    customers: function () {
        return new Promise(function (resolve, reject) {

            let customers = [];
            _.times(10, ()=> {
                customers.push(
                    new Customer(
                        faker.name.firstName()
                        , (Math.random() * 100) % 100
                        , faker.phone.phoneNumber())
                );

            });
            setTimeout(()=>{
                resolve(customers);
            },1000);
        });
    }
}