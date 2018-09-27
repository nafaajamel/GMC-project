


const UserReducer = (state=false,action) => {

 if(action.type==="SET_LOGIN"){
     return action.user
 }else
 if(action.type==="INIT_LOGIN"){
    return false
 }else{
     return state
 }

}

export default UserReducer
