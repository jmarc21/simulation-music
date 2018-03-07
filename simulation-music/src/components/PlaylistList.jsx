import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../ducks/reducer';

class PlaylistList extends Component {
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
                hello im playlist
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { getUserInfo })(PlaylistList);