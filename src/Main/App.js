import React,{Component} from 'react';
import {Link} from 'react-router';
import Layout from './Layout';

import UserAction from './../Action/UserAction';

class App extends Component {

    componentWillMount(){
        UserAction.loadCustomers();
    }

    componentDidMount(){
        //UserAction.loadCustomers();
    }

    render() {
        console.log('App',this.props.user.networkState);
        let{customers}=this.props.user;

        return (<div>

            {this.props.user.networkState.isLoading() && <div>Loading.....</div>}

            {
                this.props.user.networkState.isSuccess() && <div>
                    {this.props.user.customers.map((customer,i)=>{
                        return <div key={i}>
                            <p>name : {customer.name}</p>
                            </div>
                    })}
                </div>
            }
        </div>);
    }
}

export default App;