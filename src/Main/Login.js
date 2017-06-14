import React, {Component} from 'react';
import {browserHistory} from 'react-router';


class Login extends Component {

    constructor(props) {
        super(props);
        console.log('bootstrap login component ', props);
    }

    onLogin(e) {
        let {username, password} = this.refs;
        e.preventDefault();
        console.log(this);
        console.info(`username ${username.value} password ${password.value}`);
        if (username.value == 'user' && password.value == 'password') {
            browserHistory.push('/home');
        }
    }

    render() {
        return <div>
            <div >
                <input type="text" name="username" ref="username"/>
            </div>
            <div>
                <input type="password" name="password" ref="password"/>
            </div>
            <div>
                <button type="button" onClick={this.onLogin.bind(this)}>Login</button>
            </div>
        </div>
    }
}

export default Login;