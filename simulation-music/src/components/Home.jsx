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
            song: {
                songName: '',
                songDesc: ''
            }
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
    onclick(){
        this.props.store.dispatch(addSong(this.state.song));
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
                <button onClick={(event) => this.onclick(event)}>Add song</button>
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
function mapDispatchToProps(){
    return{
        addSong: addSong
    }
}
export default connect(mapStateToProps, mapDispatchToProps, { getUserInfo, addSong })(Home);