import axios from 'axios';

export function registerloading() {
    return {
        type: REGISTER_LOADING
    }
}

export function registersuccess(payload) {
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}

export function registerfailuer(payload) {
    return {
        type: REGISTER_FAILURE,
        payload
    }
}

export function onRegister = data => dispatch => {
    dispatch(registerloading())
    axios.post("/register",data)
     .then(response => {
        const title= response.data.message
        dispatch(registersuccess(title))
     })
     .catch(err => {
         dispatch(registerfailuer(err))
     })
}