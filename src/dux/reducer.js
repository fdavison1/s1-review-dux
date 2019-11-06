import axios from 'axios'

const initialState = {
    items: [],
    loading: false,
    error: ''
}

const GET_ITEMS = "GET_ITEMS"

export default function reducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case GET_ITEMS + "_PENDING":
            return { ...state, loading: true }
        case GET_ITEMS + "_FULFILLED":
            return { ...state, items: payload, loading: false }
        case GET_ITEMS + "_REJECTED":
            return { ...state, loading: false, error: payload}
        default:
            return state
    }
}

export function getItems(){
    let items = axios.get('/api/items').then(res => res.data)

        return {
        type: GET_ITEMS, 
        payload: items
        }
    
}