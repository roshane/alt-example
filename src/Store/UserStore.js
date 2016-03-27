import Alt from './../Alt';
import NetworkState from './NetworkState';
import UserActions from './../Action/UserAction';

class UserStore {

    constructor() {
        this.customers = [];
        this.networkState = new NetworkState();

        this.bindListeners({
            loadCustomers: UserActions.loadCustomers,
            loadCustomersSuccess: UserActions.loadCustomersSuccess,
            loadCustomersFailed: UserActions.loadCustomersFailed
        });
    }

    loadCustomers() {
        this.log('loading customers');
        this.networkState.setLoading();
    }

    loadCustomersSuccess(customers) {
        this.log('loaded customers');
        this.customers = customers;
        this.networkState.setSuccess();
    }

    loadCustomersFailed(error) {
        this.log('error loading customers');
        this.networkState.setFailed("Error while loading customers");
        this.customers = [];
    }

    log(msg) {
        console.log('UserStore', msg);
    }
}

export default Alt.createStore(UserStore, 'UserStore');


