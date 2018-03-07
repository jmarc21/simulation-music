import axios from 'axios';

//data
const initialState = {
    user: {},
    song: {}
}



//types

const GET_USER_INFO = "GET_USER_INFO";
const GET_SETSONG = "GET_SETSONG";



//action builder
export function getUserInfo() {
    let promise = axios.get('/api/me?id=1')
    promise.then(user => {
        return user.data
    })
    return {
        type: GET_USER_INFO,
        payload: promise
    }
}
export function addSong(song) {
    return {
        type: GET_SETSONG,
        payload: song
    }
}






//switch
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + "_FULFILLED":
            return Object.assign({}, state, { user: action.payload })
        case GET_SETSONG:
            return Object.assign({}, state, { song: action.payload })
        default: return state
    }
}