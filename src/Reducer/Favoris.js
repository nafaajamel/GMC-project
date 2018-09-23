

const Fav = (state=[],action) =>{

if(action.type==="ADD_FAV"){
  if(state.includes(action.fav)){
      return state.filter(x=>x!==action.fav)
  }else{
      return [...state,action.fav]
  }
}

return []

}

export default Fav