 import {createStore,combineReducers} from 'redux'
import {searchByCity,searchByName} from './Reducer/SearchReducer'
import CategoryReducer from './Reducer/CategoryReducer'
import {category} from './Componenets/Constants/data'
import Fav from './Reducer/Favoris'
import Modal from './Reducer/ModalReducer'
import UserReducer from './Reducer/UserReducer'

const store = createStore(combineReducers({
    searchByCity,
    searchByName,
    category:CategoryReducer,
    Fav,
    isOpen:Modal,
    Login:UserReducer
  
}))

export default store

store.dispatch({
    type:'INIT_CATEGORY',
    category:category()
})

// store.dispatch({
//     type:'SET_LOGIN',
//     user:{fullName:'jamel',_id:'dfdlfkl'}
// })


