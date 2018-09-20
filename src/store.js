 import {createStore,combineReducers} from 'redux'
import {searchByCity,searchByName} from './Reducer/SearchReducer'
import CategoryReducer from './Reducer/CategoryReducer'
import {category} from './Componenets/Constants/data'

const store = createStore(combineReducers({
    searchByCity,
    searchByName,
    category:CategoryReducer,
}))

export default store

store.dispatch({
    type:'UPDATE_ALL_CATEGORY',
    category:category()
})
