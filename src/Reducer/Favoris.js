

const Fav = (state=[],action) =>{

if(action.type==="ADD_FAV"){
  if(state.find(x=>x.name === action.fav.name)){
      return state.filter(x=>x.name !==action.fav.name)
  }else{
      return [...state,action.fav]
  }
}

return []

}

export default Fav