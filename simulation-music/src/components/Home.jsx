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
    addToSes(){
        axios.post('/api/adding-to-session').then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <Link to='/details'><div>details</div></Link>
                <div onClick={() => this.addToSes()}>sessions</div>
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