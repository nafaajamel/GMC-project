import React, { Component } from 'react';
import {connect} from 'react-redux'


class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active:0,
           

        }
    }
  
    componentDidMount(){
      
      console.log('sds',this.props.galery)
        this.setState({
            active:0,
           
        })
    }
    nextOrPrev = (e)=>{
if(e==="next"){
   
if(this.state.active<this.props.galery.length -1){
    this.setState({active:this.state.active+1})
}else{
    this.setState({
        active:0
    })
}

return
}
if(this.state.active===0){
    this.setState({
        active:this.props.galery.length -1
    })
}else{
    this.setState({
        active:this.state.active - 1
    })
}
    }
    render() {
        return (
            <div className="slider-container">
                <div className="slider">
                    <i id='prev' className="fa fa-chevron-left slide-arrow-left slide-arrow"
                    onClick={(e)=>this.nextOrPrev(e.target.id)}
                    ></i>
                    <img
                        className="slider-img"
                        src={'http://localhost:5000/upload/'+ this.props.galery[this.state.active]}
                        alt=""
                    />
                    <i 
                    id='next'
                    onClick={(e)=>this.nextOrPrev(e.target.id)}
                    className="fa fa-chevron-right slide-arrow slide-arrow-right"></i>
                </div>
                <div className="slider-foot">
                   {this.props.galery.map((x,i)=>{
                       return  <img
                       className =  { this.state.active ==i ? "img-item img-hover":"img-item"}
                       src= {'http://localhost:5000/upload/'+x}
                       alt=""
                       onClick={()=>this.setState({active:i})}
                   />
                   })}
                
                
                </div>
                <div className="slider-icon">
               
                    <div className="btn-slider">
                    <button className="btn-sauv"
                     onClick={()=> this.props.addFav("dfdf")}
                    >
                        <i className="fa fa-heart"></i>
                        sauvgarder
                    </button>
                    <button className="btn-warn"
                     
                    >
                    
                        <i className="fa fa-exclamation-triangle"
                      
                        ></i>
                        signaler
                    </button>
                    </div>
                    <div className="share">
                    <b>Partager :</b>
                    <i class="fab fa-facebook-square fb"></i>
                   <i class="fab fa-google-plus-square gp"></i>
                   <i class="fab fa-twitter-square tw"></i>

                    </div>
                </div>
            </div>

        );
    }
}
const state = state=>{
    return{

    }
}
const dispatch = dispatch=>{
    return{
        addFav: fav => {
            dispatch({
              type: "ADD_FAV",
              fav,
            });
          }
    }
}

export default connect(state,dispatch)(Carousel);