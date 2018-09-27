import React, { Component } from "react";
import {category} from '../Constants/data'
import {getCity} from '../Constants/data'
import axios from 'axios'
import {connect} from 'react-redux'
import FormData from 'form-data'
const _ = require('lodash')

class AdArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addOrSave: "ajouter",
      toggleForm: false,
      title:'',
      city:'',
      price:'',
      pu:'',
      description:'',
      _id:'',
      img:[],
      images:[],
      category:'',
      isAvaible:true,
      adList:[]
    };
  }

  initState = ()=>{
   this.setState({
     owner:{},
    addOrSave: "ajouter",
    toggleForm: false,
    title:'',
    city:'',
    price:'',
    unity:'',
    _id:'',
    images:[],
    description:'',
    img:[],
    category:'',
    isAvaible:true,
   

   })
  }

  getAd = (val) =>{
 
  
    axios.post('/user/ad',{val}).then(res=>{
      this.setState({
        adList: [... res.data]
      })
    })
  }
  owner ={}
  componentDidMount() {
    
this.props.owner.then(x=>{
  this.setState({
    owner: Object.assign({},x)
  })
 this.owner = x
  this.getAd(x)  
  
})
  }


addElement = () =>{

  const {title,city,price,img,unity,description,category,isAvaible,owner } = this.state
  
  if(this.state.addOrSave==='ajouter'){

axios.post('/ads/add',{title,city,price,img,unity,description,category,isAvaible,owner}).then((res)=>{
this.getAd(this.owner)

} )
.catch(err=>console.log(err) )
this.initState()

  }else{
    
axios.put('/ad/update/'+this.state._id,{title,city,price,img,unity,description,category,isAvaible}).then(res=>{
  
 this.setState({
   adList:[...this.state.adList,res.data]
 })
  this.initState()
  }
)
.catch(err=>console.log(err))


  }


}

  edit = ({title,city,price,img,unity,description,category,isAvaible,_id}) => {
    this.setState({
      toggleForm: true,
      addOrSave: "edit",
      title,city,
      price,
      images: img.map(x=>x = 'http://localhost:5000/upload/'+x),
      unity,
      description,
      _id,
      category,
      isAvaible,
      img,
    });
   
  };

  uploadImg(e) {
    
    const formData = new FormData()
    formData.append('img', e.files[0], e.files[0].name)
    axios.post('/fileup', formData)


    let file = e.files[0];
    this.setState({
      img:  [...this.state.img,file.name ]
    })
   
    let reader = new FileReader();
    
    
    reader.onloadend = () => {
      this.setState({
        images:   [...this.state.images,reader.result],
        
      });
    }

    reader.readAsDataURL(file)
    
  }
 

   
  hundleChange = (e)=>{
     this.setState({
       [e.id]:e.value
     })
  }

remove = (x)=>{
  
    if(window.confirm('supprimer annonce ?')) axios.delete('/ad/delete/'+x).then(res=>{
  alert('annonce supprimer')
  this.getAd(this.owner)
})
}


  render() {
    return (
      <div className="user-page">
      
        <div
          className={
            this.state.toggleForm ? "add-form show-form-ad" : "add-form"
          }
        >
          <h3>
            {this.state.addOrSave === "ajouter"
              ? "ajouter utilisateur"
              : "modifier utilisateur"}
          </h3>

          {/* insert user */}

          <div className="insert-form ">
          <div className="row">
              <label for="img">images  :</label>
              <input 
              id="img"
              multiple
             
              accept="image/*"
              onChange={(e)=>this.uploadImg(e.target)}
              type="file" id="img"
               
               />{" "}
              <span className="tooltip">max 5 images
              
               </span>
               <div className="img-prev">{this.state.images.map(x=> <img width="30" height='30' src={x} />)}</div>

            </div>
            <div className="row">
              <label for="title">titre  :</label>
              <input
              id='title'

              value={this.state.title}
              onChange={(e)=>this.hundleChange(e.target) }
              type="text" id="title" />{" "}
            </div>
            <div className="row">
              <label for="price">prix :</label>
              <input 
               id='price'
               value={this.state.price}
               onChange={(e)=>this.hundleChange(e.target) }
              type="number" id="price" />{" "}
            </div>
           
            <div className="row">
             <label for="desciption">discription :</label>
             <textarea id="description"
             value={this.state.description}
             onChange={(e)=>this.hundleChange(e.target)}
             ></textarea>
            </div>
            <div className="row">
              <label for="category">categorie :</label>
              <select 
              id="category"
              value={this.state.category}
              onChange={(e)=>this.hundleChange(e.target)}
              > 
              <option>selectionnez une categorie</option>
              {category().map(x=> {
                  return <option value={x.name}>{x.name}</option>
              } )}
              </select>
              </div>
              <div className="row">
              <label for="city">ville :</label>
              <select value={this.state.city} id='city' onChange={(e)=>this.hundleChange(e.target)} >
              {getCity().map(x=>{
                return <option value={x}>{x}</option>
              })}
              </select>
              
            </div>
            <div className="row">
              <label for="unity">unité :</label>
              <select value={this.state.unity} id="unity"
              onChange={(e)=>this.hundleChange(e.target)}
              >
              <option>par :</option>
              <option> heure</option>
              <option> ans</option>
              <option> mois</option>
              <option> semaine</option>
              <option> jour</option>
              </select>
            </div>
            <div className="row">
              <label for="avaible">disponible :</label>
              <select value={this.state.isAvaible} id="isAvaible"
              onChange={(e)=>this.hundleChange(e.target)}
              >
              <option value='1'>oui</option>
              <option value="0">non</option>
             
              </select>
            </div>
            <div className="row">
              <div>
                <button className="btn add"
                onClick={ ()=>this.addElement()} 
                >{this.state.addOrSave}</button>
                <button
                  className="btn cancel"
                  onClick={() =>
                    
                      ()=>this.initState()

                  }
                >
                  annuler
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-header">
            List of Users
            <button
              className="btn btn-primary"
              onClick={()=>this.setState({
                toggleForm:true
              }) }
            >
              ajouter
            </button>
          </div>
          <div class="panel-body">
            <div className="filter-tab">
              <div>
                voir :{" "}
                <select className="list-view">
                  <option value="20">20</option>
                  <option value="20">50</option>
                  <option value="20">100</option>
                </select>{" "}
                elements
              </div>
              <div>
                recherche : <input type="text" className="search-user" />{" "}
              </div>
            </div>
            <table>
              <tr class="table-head">
               
                <td>titre</td>
                <td>images</td>
                <td>categorie</td>
                <td>prix</td>
                <td>unité</td>
                <td>disponible</td>
                <td>ville</td>
                <td>action</td>
              </tr>
              
                {this.state.adList.map(x=>{
                  return  <tr>
                     <td>{x.title.slice(0,8).padEnd(11,'.') }</td>
                <td>{x.img.length}</td>
                <td>{x.category }</td>
                <td>{x.price}</td>
                <td>{x.unity}</td>
                <td>{x.city}</td>
                <td>{x.isAvaible}</td>
                <td>

                    <button class="edit">
                   
                    <i
                      onClick={() => this.edit(x)}
                      className="fa fa-edit"
                    />{" "}
                  </button>
                  <button class="remove"
                   onClick={()=>this.remove(x._id)}
                  >
                   
                    <i className="fa fa-trash" />
                  </button>
                </td>
                  </tr>
                })}
             
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const state = ({Login})=>{
  return{
    owner: new Promise((resolve,reject)=>{
      resolve(Login)
    } )
  }
}

export default connect(state)(AdArray);
