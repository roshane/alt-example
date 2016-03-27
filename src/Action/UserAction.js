import Alt from './../Alt';
import customerService from './../Data/CustomerService';

class UserAction {

    constructor() {

    }

    loadCustomers() {
        this.log('loading customers');
        customerService.customers()
            .then(this.loadCustomersSuccess)
            .catch(this.loadCustomersFailed);
        return true;
    }

    loadCustomersSuccess(customers) {
        this.log('load customers success');
        return customers;
    }

    loadCustomersFailed(error) {
        this.log('load customers failed');
        return error;
    }

    log(msg){
        return 0;
    }
}

export default Alt.createActions(UserAction);

