

const initState = ""

export const searchByCity = (state= initState,action)=>{

switch(action.type){
    case "SET_ADSCITY":
    return action.city
   default :
return initState
} 

}

export const searchByName = (state=initState,action) => {

if(action.type==="SET_ADSNAME"){
    return action.name
}
return initState

}

