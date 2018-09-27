

const Fav = (state=[],action) =>{

if(action.type==="ADD_FAV"){
  if(state.find(x=>x.title === action.fav.title)){
      return state.filter(x=>x.title !==action.fav.title)
  }else{
      return [...state,action.fav]
  }
}

return []

}

export default Fav