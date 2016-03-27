export default class NetworkState {

    constructor() {
        this.init = true;
        this.loading = false;
        this.success = false;
        this.failed = false;
        this.error = null;
    }

    setLoading() {
        this.failed = false;
        this.error = null;
        this.success = false;
        this.init = false;
        this.loading = true;
    }

    isLoading() {
        return this.loading;
    }

    isFailed() {
        return this.failed;
    }

    setFailed(error) {
        this.success = false;
        this.init = false;
        this.loading = false;
        this.failed = true;
        this.error = error;
    }

    isSuccess() {
        return this.success;
    }

    setSuccess() {
        this.failed = false;
        this.error = null;
        this.loading = false;
        this.init = false;
        this.success = true;
    }

    isInitial() {
        return this.init;
    }
}
