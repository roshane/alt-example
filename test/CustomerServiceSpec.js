import customerService from './../src/Data/CustomerService';

var print = function (data) {
    console.log(data);
};

customerService.customers()
    .then(print);