

const Ads = (state=[],action) =>{

    if(action.type==="SET_ADS_LIST"){
        return action.adList
    }else{
     return []
    }
}
export default Ads