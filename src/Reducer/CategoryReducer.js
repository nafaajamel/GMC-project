


const CategoryReducer = (state=[],action) => {

switch(action.type){
    case 'UPDATE_ON_CATEGORY':
    return state.map(x=>x.name===action.category.name?action.category:x)
    case 'UPDATE_ALL_CATEGORY':
    return action.category
    
    default:
    return state
}


}
export default CategoryReducer