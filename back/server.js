const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const validator = require('validator')
const {userSchema} = require('./Schema')
const {adSchema} = require('./Schema')
const jwt = require('jsonwebtoken')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./upload')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage})



// connect to mongo
mongoose.connect('mongodb://localhost:27017/ekrili')
.then(()=>console.log('connected'))
.catch(err=>console.log('errrr', err))


const app = express()

app.use(bodyParser.json())

app.use('/upload',express.static('upload'))

const isLog = (req,res,next)=>{
    
      if ( ! req.header('x-auth-token')) return false
    const log = jwt.verify(req.header('x-auth-token'),"jwtPrivateToken")
  
    next()
    
}

 
// declare class 
 const User =  mongoose.model('users',userSchema)
 const Ad = mongoose.model("ads",adSchema)
   
 // create new user
async function createUser(obj) {
    const user = new User(obj)
       return await user.save()
        
}
// get all user
 async function getAllUser(){
   const res = await User.find()
   return res
}

// get ads 

async function getAds(){
const res = await Ad.find()
return res
}

async function findOnAd(id){

    const res =await Ad.findOne({_id:id})
      return res
}

async function createAd(ad){

    const newAd = new Ad(ad)

    return await newAd.save()
}

async function login(login,pass){
        
    const user = await User.findOne({phone:login,password:pass})
   
    return user
   
} 


app.get('/users',(req,res)=>{
getAllUser().then((data=>{
    res.send(data)
}))
})

app.get('/users/:id',(req,res)=>{
console.log(req.params.id)
    User.findOne({phone:req.params.id}).then(data=>{
        res.send(data)
    })

  
})
app.post('/users/add',(req,res)=>{


    createUser(req.body.user).then((data)=>{
        console.log(data)
        res.send(data)
        
    })})



app.get('/ads',(req,res)=>{

    getAds().then((data)=>[
        res.send(data)
    ])
})

app.get('/ad/:id',(req,res)=>{

  findOnAd(req.params.id).then(data=>{
      res.send(data)
  })

})


app.post('/login',(req,res)=>{
    login(req.body.login,req.body.password).then(data=>{

     const token  =  jwt.sign({user:data},"jwtPrivateToken")
  
        res.header("x-auth-token",token).send(data)
    })
})
app.post('/fileup',upload.single('img'),(req,res)=>{
    console.log(req.body)
    console.log(req.file)
})

app.post('/ads/add',upload.single('img') ,(req,res)=>{
   console.log(req.file)

    createAd(req.body).then(data=>{
        res.send(data)
    })


})

app.listen(5000,(err)=>{
    err ? console.log('errr'):console.log('runn')
})