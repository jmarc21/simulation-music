import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo } from '../ducks/reducer';
import { addSong } from '../ducks/reducer';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            songName: '',
            songDesc: ''
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
    addSong(){
        this.props.addSong;
    }
    render() {
        return (
            <div>
                <Link to='/details'><div>details</div></Link>
                <div onClick={() => this.addToSes()}>sessions</div>
                <br/>
                <br/>
                <input type="text"/>
                <input type="text"/>
                <button onClick={() => this.AddSong()}>Add song</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
//43J
function mapDispatchToProps(dispatch){
    return{
        addSong: this.state.songName
    }
}
export default connect(mapStateToProps, mapDispatchToProps, { getUserInfo })(Home);