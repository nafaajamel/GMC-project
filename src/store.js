 import {createStore,combineReducers} from 'redux'
import {searchByCity,searchByName} from './Reducer/SearchReducer'
import CategoryReducer from './Reducer/CategoryReducer'
import {category} from './Componenets/Constants/data'
import Fav from './Reducer/Favoris'

const store = createStore(combineReducers({
    searchByCity,
    searchByName,
    category:CategoryReducer,
    Fav,
  
}))

export default store

store.dispatch({
    type:'INIT_CATEGORY',
    category:category()
})

