 import {createStore,combineReducers} from 'redux'
import {searchByCity,searchByName} from './Reducer/SearchReducer'


const store = createStore(combineReducers({
    searchByCity,
    searchByName,
}))

export default store

