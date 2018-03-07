import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../ducks/reducer';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    async componentDidMount(){
        await this.props.getUserInfo()
        console.log(this.props.user)
    }
    render() {
        return (
            <div>
                <Link to='/details'><div>details</div></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { getUserInfo })(Home);