import React,{Component} from 'react';
import {Link} from 'react-router';
import AltContainer from 'alt-container';
import UserStore from './../Store/UserStore';
import TopMenu from './TopMenu';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

require('./../../resources/style.css');
require('./../../resources/animation.css');

class Layout extends Component {

    render() {

        return (
            <div>
                {/* TopMenu */}
                <AltContainer
                    stores={[UserStore]}
                    inject={{
                    user:function(){
                        return UserStore.getState();
                    }
                }}>
                    <TopMenu/>
                </AltContainer>

                {/* main content */}
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    <AltContainer
                        key={Math.random()}
                        stores={[UserStore]}
                        inject={{
                            user:function(){
                                return UserStore.getState();
                            }
                    }}>

                        {this.props.children}
                    </AltContainer>

                </ReactCSSTransitionGroup>
            </div>

        );
    }
}


export default Layout;