import {Link} from 'react-router';
import React,{Component} from 'react';


class TopMenu extends Component {



    render() {

        return <div>
            <Link to="/home">Home</Link>&nbsp;
            <Link to="/about">About</Link>&nbsp;
            <hr/>
        </div>
    }
}

export default TopMenu;