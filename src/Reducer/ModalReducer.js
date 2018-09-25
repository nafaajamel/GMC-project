

const Modal = (state=false,action)=>{

    if(action.type==="SET_MODAL"){
        return ! state
    }
    else{
        return state
    }
}

export default Modal